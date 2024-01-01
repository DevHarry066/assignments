const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index');


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const { username, password } = req.body;

        //Add user details into Admin
        await Admin.create({ username, password });

        //Return response
        res.status(200).json({ message: 'Admin created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        const { username, password } = req.body;

        //Validate email and password
        if (!username || !password) {
            res.status(400).json({ message: 'Please provide email and password' });
        }

        //Check if the user is present
        const admin = await Admin.findOne({ username });

        //If user not present
        if (!admin) {
            res.status(401).json({ message: 'Invalid Credentails' });
        }

        //Check password
        const isMatch = await admin.matchPassword(password);

        if (!isMatch) {
            res.status(401).json({ message: 'Invalid Credentails' });
        }
        //Get token with getSignedJwtToken defined in Admin schema 
        const token = admin.getSignedJwtToken();

        //return response;
        res.status(200).json({
            success: true,
            token: token
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        //Add course information into Course Model
        const courses = await Course.create(req.body);
        res.status(200).json({ success: true, data: courses });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        //Add course information into Course Model
        const courses = await Course.find();
        res.status(200).json({ success: true, data: courses });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;