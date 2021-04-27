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
route.post('chocolateList', controller.create);
route.get('/chocolateList', controller.find);
route.put('/api/chocolate/:id', controller.update);
route.delete('/api/chocolate/:id', controller.delete);
module.exports = route;
