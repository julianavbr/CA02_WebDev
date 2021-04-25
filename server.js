const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
var path = require("path");
const res = require("express");

// app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const connectionString = 'mongodb+srv://cloudMongo001:ERuPVMnQ7mdDKvn@cluster0.ompkb.mongodb.net/chocolateShop?retryWrites=true&w=majority';

module.exports = exports = function () {
    console.log("Hello World!");
};

//     MongoClient.connect(connectionString, { useUnifiedTopology: true })

MongoClient.connect(connectionString, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('chocolateShop')
        const quotesCollection = db.collection('chocolate')
        // app.use(/* ... */)
        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
                .then(results => {
                    res.render(__dirname + '/chocolateShop/views/index.html', { quotes: results })
                })
                .catch(error => console.error(error))


        })
        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
                { desc: 'Milk Chocolate' },
                {
                    $set: {
                        desc: req.body.name,
                        prc: req.body.quote
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

        app.set('views', './views');
        app.set('view engine', 'html');
        app.get('/api', (req, res) => res.send('Its working!'));

        app.listen(process.env.port || 4000, function () {
            console.log('now listening for requests');

        });

        app.listen(3000, function () {
            console.log('listening on 3000')
        })
// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/chocolateShop/views/index.html')
        })