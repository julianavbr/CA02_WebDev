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

<<<<<<< HEAD
// app.listen(port, function () {
//     console.log('now listening for requests');
=======
app.listen(process.env.PORT || 4000, function () {
    console.log('now listening for requests');
>>>>>>> d8ac3fa8fa73f51faf147fa16e582cc919c7b80a

// });

<<<<<<< HEAD
app.listen(port, function () {
=======
app.listen(process.env.PORT || 3000, function () {
>>>>>>> d8ac3fa8fa73f51faf147fa16e582cc919c7b80a
    console.log('listening on 3000')
})

app.post('/', controller.create);
app.put('/', controller.update)
app.get('/', services.homeRoutes);
app.delete('/', controller.delete);
