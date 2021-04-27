const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
var path = require("path");
const res = require("express");
const config = require('./database/config');



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

MongoClient.connect(config.dbHost, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db(config.dbName)
        const quotesCollection = db.collection(config.dbCollection)
        // app.use(/* ... */)
        app.get('/', (req, res) => {
            quotesCollection.find().toArray()
                .then(results => {
                    res.render(__dirname + '/chocolateShop/views/index.html', { quotes: results })
                })
                .catch(error => console.error(error))


        })
        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
                { item: 'Milk Chocolate' },
                {
                    $set: {
                        main_groups: req.body.main_groups,
                        item: req.body.item,
                        price: req.body.price
                    }
                },
                {
                    upsert: true
                }
            )
                .then(result => {
                    res.json('Success')
                })
                .catch(error => console.error(error))
        })

        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
            // app.listen(/* ... */)

        }).catch(console.error)


        app.get('/api', (req, res) => res.send('Its working!'));

        app.listen(process.env.port || 4000, function () {
            console.log('now listening for requests');

        });

        app.listen(3000, function () {
            console.log('listening on 3000')
        })

        app.get('/', (req, res) => {
            // res.sendFile(__dirname + '/chocolateShop/index.html')
            res.render(__dirname + '/chocolateShop/index.ejs')
        })