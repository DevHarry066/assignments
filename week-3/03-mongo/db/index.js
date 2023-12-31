const mongoose = require('mongoose');

const connectDB = require('./db');

connectDB();

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: [true, 'Please enter a username']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: [true, 'Please enter a username']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    purchasedCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price']
    },
    imageLink: {
        type: String,
        required: [true, 'Please enter an image']
    },
    published: {
        type: Boolean,
        required: [true, 'Please enter a published']
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}