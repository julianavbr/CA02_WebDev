
const express = require('express'); //It allows to receive a reply the requests from http
const bodyParser = require('body-parser') // it requires body-parser to be used as middleware
const app = express(); // it uses express as the constant app
const connectDB = require('./server/database/connect'); //the constant to connect to the database
const controller = require('./server/controller/controller') // to access the controllers that will communicate with the renders
const services = require("./server/services/renders"); // to access the render file that will process the controllers that will communicate with the database
require('dotenv').config() //to request the usage of .env files
const path = require('path');  //It activates the use of file's locations.

//set the main port to use by heroku 
app.set( 'port', ( process.env.PORT || 8000 ));

//set the use of the middleware using JSON
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


//set the default client side file to ejs (instead of *.html)
app.set('view engine', 'ejs');

//css and js
app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

// mongodb connection
connectDB();

//check which the port is listening 
app.listen(app.get( 'port' ), function () {
    console.log('listening on '+ app.get( 'port' ))
})

//set the controllers
app.post('/', controller.create);
app.put('/', controller.update)
app.get('/', services.homeRoutes);
app.delete('/', controller.delete);

