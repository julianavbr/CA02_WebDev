//to render the redirection of files that will deal with the database
var chocolates = require('../model/model')

//to load the index file
exports.homeRoutes = function(req, res) {
    chocolates.find({}, function (err, chocolates) {
        if (err) {
            res.status(400).json(err);
        }
        res.render(__dirname + '/../../chocolateShop/index.ejs', {chocolates})
    });
};

//to add a new chocolate
exports.create = (req, res) =>{
    res.render('create');
}

//to delete a new chocolate
exports.delete = (req, res) =>{
    res.render('delete');
}
//to update a new chocolate
exports.update = (req, res) =>{
    res.render('update');
}