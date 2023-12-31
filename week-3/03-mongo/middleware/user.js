const { User } = require('../db/index');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    const user = await User.findOne({ username: username });
    if (!user) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    if (user.password !== password) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    next();
}

module.exports = userMiddleware;