//request the file from .env
require('dotenv').config()
module.exports = {
    dbHost: process.env.MONGO_URI,
    dbName: 'chocolateShop'
};
