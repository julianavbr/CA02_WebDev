require('dotenv').config()
module.exports = {
    dbHost: process.env.MONGO_URI,
    // dbHost: 'mongodb+srv://cloudMongo001:ERuPVMnQ7mdDKvn@cluster0.ompkb.mongodb.net/chocolateShop?retryWrites=true&w=majority' ,
    dbName: 'chocolateShop',
    dbCollection: 'chocolate'
};
// console.log(process.env.MONGO_URI)