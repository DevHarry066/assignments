const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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


AdminSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
const JWT_SECRET = 'abcde12345';
// var JWT_EXPIRE=30d

AdminSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({
        _id: this._id,
    }, JWT_SECRET, {
        expiresIn: 60 * 60 * 24 * 30 // expires in 24 hours
    });
};

AdminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({
        _id: this._id,
    }, JWT_SECRET, {
        expiresIn: 60 * 60 * 24 * 30 // expires in 30 days
    });
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}