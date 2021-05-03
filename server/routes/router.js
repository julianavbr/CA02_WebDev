// all the routes that will connect to the controller class
const express = require('express');

const route = express();
const controller = require('../controller/controller')
var path = require("path");

API
route.post('/', controller.create);
route.get('/', controller.find);
route.put('/:id', controller.update);
route.delete('/:id', controller.delete);
module.exports = route;
