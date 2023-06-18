
const mongoose = require('mongoose');


const connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Connected to MongoDb");

        }).catch((error) => {
            console.log(error.message);
        })
}

module.exports = connect;
