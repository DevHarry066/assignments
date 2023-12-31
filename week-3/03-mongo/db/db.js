const mongoose = require('mongoose')

const MONGO_URI = 'YOUR_MONGO_URL';

const connectDB = async () => {
    const conn = mongoose.connect(MONGO_URI, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    });
    console.log(`MongoDB database connected: ${(await conn).connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;
