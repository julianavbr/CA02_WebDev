
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const connectDB = require('./server/database/connect');
const controller = require('./server/controller/controller')
const services = require("./server/services/renders");
require('dotenv').config()
const path = require('path');

const dbUrl = process.env.CA02_WEB

app.set( 'port', ( process.env.PORT || 8000 ));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));



app.set('view engine', 'ejs');

//css and js
app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

// mongodb connection
connectDB();


app.listen(app.get( 'port' ), function () {
    console.log('listening on '+ app.get( 'port' ))
})

app.post('/', controller.create);
// app.put('/', controller.update)
app.get('/', services.homeRoutes);
app.delete('/', controller.delete);

