const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        await Admin.create(req.body);
        res.status(200).json({ message: 'Admin created successfully' });
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

module.exports = router;