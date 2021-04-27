const mongoose = require('mongoose');

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
const Chocolatedb = mongoose.model('chocolate',schema);
module.exports = Chocolatedb;