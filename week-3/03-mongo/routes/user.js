const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        const user = await User.create(req.body);
        res.status(200).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    try {
        //get username and password from headers
        //Add course information into Course Model
        const courses = await Course.find();
        res.status(200).json({ success: true, data: courses });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        //get username and password from headers
        const { username } = req.headers;

        //Get course id from params
        const courseId = req.params.courseId;

        //Update purchased courses with courseId in User Model
        await User.updateOne(
            { username },
            {
                $push: { purchasedCourse: courseId },
            }
        ).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );

        //Rteurn response as successful
        res.status(200).json({ success: true, data: "Course purchased successfully" });
    } catch (err) {

        //return error
        res.status(500).json({ message: err.message });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        //get username and password from headers
        const { username } = req.headers;

        //Get user from database with User model
        const user = await User.findOne({ username });
        const purchaseRequest = user.purchasedCourse;

        //Get purchasedCourses from Course where ids are in pruchaseRequest(It has multiple ids)

        const course = await Course.find().where('_id').in(purchaseRequest).exec();

        //Return response with purchasedCourses by User
        res.status(200).json({ message: 'success', purchasedCourses: { course: course } });
    } catch (err) {
        //Return response with error message
        res.status(400).json({ message: err.message });
    }


});

module.exports = router