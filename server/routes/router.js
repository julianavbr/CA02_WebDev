const express = require('express');

const route = express();
const controller = require('../controller/controller')
var path = require("path");
// const route = express.Router();


// route.get('/', (req, res) => {
//
//     res.render(__dirname +'chocolateShop/index.ejs', { chocolates : response.data })
// })

//API
route.post('/', controller.create);
route.get('/', controller.find);
route.put('/:id', controller.update);
route.delete('/:id', controller.delete);
module.exports = route;
