
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var path = require("path");
const connectDB = require('./server/database/connect');
const controller = require('./server/controller/controller')
const services = require("./server/services/renders");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
// app.set('chocolateShop', path.resolve(__dirname,"chocolateShop/views"));

//css and js
app.use('/css', express.static(path.resolve(__dirname,"public/css")))
app.use('/js', express.static(path.resolve(__dirname,"public/js")))

// mongodb connection
connectDB();

app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');

});

app.listen(3000, function () {
    console.log('listening on 3000')
})

// app.post('/chocolateList', controller.create);

app.get('/', services.homeRoutes);

