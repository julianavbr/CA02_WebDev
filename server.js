const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require('dotenv');
var path = require("path");
const controller = require("./server/controller/controller")
const connectDB = require('./server/database/connect');

const routers = require('./server/routes/router')

dotenv.config( { path : 'config.env'} )

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('chocolateShop', path.resolve(__dirname,"chocolateShop/views"));

//css and js
app.use('/css', express.static(path.resolve(__dirname,"public/css")))
app.use('/js', express.static(path.resolve(__dirname,"public/js")))


// const connectionString = 'mongodb+srv://cloudMongo001:ERuPVMnQ7mdDKvn@cluster0.ompkb.mongodb.net/chocolateShop?retryWrites=true&w=majority';
//     MongoClient.connect(connectionString, { useUnifiedTopology: true })
//
// connect to Mongo DB
connectDB();
//
        app.listen(process.env.port || 4000, function () {
            console.log('now listening for requests');

        });

        app.listen(3000, function () {
            console.log('listening on 3000')
        })

app.post('/chocolateList', controller.create);
app.get('/chocolateList', controller.find);
// route.put('/api/chocolate/:id', controller.update);
// route.delete('/api/chocolate/:id', controller.delete);
// load router
// app.use('/', require('./server/routes/router'));
// app.get('/', (req, res) => {
//     // res.sendFile(__dirname + '/chocolateShop/index.html')
//     res.render(__dirname + '/chocolateShop/index.ejs')
// })
app.use('/', require(routers.homeRoutes()));

function isNumber(input) {
  if (typeof input != "string") return false
  return !isNaN(input) && !isNaN(parseFloat(input)) // clean and check if the input is a number
}
//to check and remove illegal char from the input

function sanitiseInput(input){
    input = input.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return input.trim();
}
