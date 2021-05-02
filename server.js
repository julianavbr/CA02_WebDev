const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var path = require("path");
const connectDB = require('./server/database/connect');
const controller = require('./server/controller/controller')
const services = require("./server/services/renders");
var port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
// app.set('chocolateShop', path.resolve(__dirname,"chocolateShop/views"));

//css and js
app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

// mongodb connection
connectDB();


app.listen(port, function () {
    console.log('listening on ${port}')
})

app.post('/', controller.create);
app.put('/', controller.update)
app.get('/', services.homeRoutes);
app.delete('/', controller.delete);
