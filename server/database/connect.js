const mongoose = require('mongoose');
const config = require('./datainfo');


const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(config.dbHost, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true

        })
console.log("Deu certo")
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
// const config = require('./config');
// const MongoClient = require('mongodb').MongoClient;
//
// const connectDB = async()  => {
        // MongoClient.connect(config.dbHost, {useUnifiedTopology: true})
        //     .then(client => {
        //         console.log('Connected to Database')
        //         const db = client.db(config.dbName)
        //         const chocolateCollection = db.collection(config.dbCollection)
        //         // app.use(/* ... */)
        //         // app.get('/', (req, res) => {
        //         //     chocolateCollection.find().toArray()
        //         //         .then(results => {
        //         //             res.render(__dirname + '/chocolateShop/index.ejs', {chocolateList: results})
        //         //         })
        //         //         .catch(error => console.error(error))
        //         //
        //         //
        //         // })
        //         // app.put('/chocolateList', (req, res) => {
        //         //     chocolateCollection.findOneAndUpdate(
        //         //         {item: 'Milk Chocolate'},
        //         //         {
        //         //             $set: {
        //         //                 main_groups: req.body.main_groups,
        //         //                 item: req.body.item,
        //         //                 price: req.body.price
        //         //             }
        //         //         },
        //         //         {
        //         //             upsert: true
        //         //         }
        //         //     )
        //         //         .then(result => {
        //         //             res.json('Success')
        //         //         })
        //         //         .catch(error => console.error(error))
        //         // })
        //         //
        //         // app.post('/chocolateList', (req, res) => {
        //         //     chocolateCollection.insertOne(req.body)
        //         //         .then(result => {
        //         //             res.redirect('/')
        //         //         })
        //         //         .catch(error => console.error(error))
        //         // })
        //         // // app.listen(/* ... */)
        //
        //     }).catch(console.error)



// module.exports = connectDB;