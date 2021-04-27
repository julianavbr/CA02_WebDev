const axios = require('axios');



//
// exports.homeRoutes = (req, res) => {
//     // Make a get request to /api/users
//     axios.get('http://localhost:3000/chocolateList')
//         .then(function (response) {
//             console.log(response)
//             res.render(__dirname + '/../../chocolateShop/index.ejs', {chocolates: response.data});
//         })
//         .catch(err => {
//             res.send(err);
//         })
//
// }

    exports.homeRoutes = (req, res) => {
        // Make a get request to /api/users

        res.render(__dirname + '/../../chocolateShop/index.ejs', {chocolates: "fghfghfghfg"});
    }





exports.create = (req, res) =>{
    res.render('create');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/chocolateList', {params: {id: req.query.id}})
        .then(function (chocdata) {
            res.render("update_choc", {chocolates: chocdata.data})
        })
        .catch(err => {
            res.send(err);
        })
}