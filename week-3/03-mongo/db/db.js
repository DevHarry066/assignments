const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://sharmahariom066:join1234@hariommerncluster.lsfcz91.mongodb.net/CourseSelling?retryWrites=true&w=majority';

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
