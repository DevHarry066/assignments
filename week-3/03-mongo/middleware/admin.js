const { Admin } = require('../db/index');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    const user = await Admin.findOne({ username: username });
    if (!user) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    if (user.password !== password) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    next();
}

module.exports = adminMiddleware;