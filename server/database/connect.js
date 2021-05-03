// to connect to the database in mongoDB atlas
const mongoose = require('mongoose');
const config = require('./datainfo'); //get the file that will get from .env

//attempt the connection
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(config.dbHost, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true

        })
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

//prepare to export the connection to server.js
module.exports = connectDB
