var ChocolateDB = require('../model/model');
const connect = require('../database/connect')
require('../../public/js/TheChocolateShop')

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    // new user
    const choc = new ChocolateDB({

        group : req.body.main_groups,
        item : req.body.item,
        price: req.body.price,
        isGlutenFree : req.body.glutenfree
    })

    // save user in the database
    choc
        .save(choc)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Please check it again"
            });
        });

}

// retrieve and return all users/ retrieve and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        ChocolateDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "This chocolate was not found"})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "The chocolate was not found"})
            })

    }else{
        ChocolateDB.find()
            .then(choc => {
                res.send(choc)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "The chocolate was not found" })
            })
    }


}

//Updates the item(s) selected
exports.update = (req, res)=>{
    ChocolateDB.findOneAndUpdate(
        { item: 'Milk Chocolate' },
        {
            $set: {
                item: req.body.item,
                price: req.body.price
            }
        },
        {
            upsert: true
        }
    )
        .then( res => {
            console.log(res)
        })
        .catch(error => console.error(error))
}

// let list = ["Milk Chocolate"]
//
//     console.log(list)
// for(let i = 0; i < list.length; i++) {

// Delete a user with specified user id in the request
exports.delete = function(req, res) {
    ChocolateDB.deleteOne({item: "Milk Chocolate"}, function (err, chocolates) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(chocolates);
    });
};
