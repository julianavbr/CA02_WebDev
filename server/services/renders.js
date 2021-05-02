const axios = require('axios');
var chocolates = require('../model/model')

exports.homeRoutes = function(req, res) {
    chocolates.find({}, function (err, chocolates) {
        if (err) {
            res.status(400).json(err);
        }
        res.render(__dirname + '/../../chocolateShop/index.ejs', {chocolates})
    });
};


exports.create = (req, res) =>{
    res.render('create');
}


exports.delete = (req, res) =>{
    res.render('delete');
}
exports.update = (req, res) =>{
    res.render('update');
}