const express = require('express');

const app = express();
const controller = require('server/controller/controller')
var path = require("path");
const route = express.Router();

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/')
        .then(function(response){
            res.render(__dirname +'chocolateShop/index.ejs', { chocolates : response.data });
        })
        .catch(err =>{
            res.send(err);
        })


}
route.get('/', (req, res) => {

    res.render(__dirname +'chocolateShop/index.ejs', { chocolates : response.data })
})

//API
route.post('/chocolateList', controller.create);
route.get('/chocolateList', controller.find);
route.put('/api/chocolate/:id', controller.update);
route.delete('/api/chocolate/:id', controller.delete);
module.exports = route;