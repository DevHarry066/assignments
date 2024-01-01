const { Admin } = require('../db/index');// Middleware for handling auth
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'abcde12345';
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let token;
    const { username, password } = req.headers;
    if (!username || !password) {
        res.status(400).json({ message: 'Please provide a username and password' });
    }
    const admin = await Admin.findOne({ username: username });
    if (!admin) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
        res.status(401).json({ message: 'Invalid Credentails' });
    }

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else {
        res.status(401).json({ message: 'Correct Token is required' });
    }

    //Make sure token exists    
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = await jwt.verify(token, JWT_SECRET);
        const user = await Admin.findById(decoded._id);
        if (!user) {
            res.status(401).json({ message: 'Could not find the user, issue in req' });
        }
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = adminMiddleware;