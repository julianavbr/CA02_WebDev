// creates the schema and parameters to insert documents in the database
const mongoose = require('mongoose');

var choclist = [];
var schema = new mongoose.Schema({
    main_groups:{
        type: String,
        // required: true
    },

    item: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    glutenfree: Boolean

    })
const Chocolatedb = mongoose.model('chocolate',schema); //constant that will be used to access the database
module.exports = Chocolatedb; //constant ready to be requested