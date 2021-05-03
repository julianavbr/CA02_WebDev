// class to pull the requests regarding CRUD in the database

var ChocolateDB = require('../model/model');
const connect = require('../database/connect')
const choco = require('../../public/js/TheChocolateShop')

// create and save new chocolate
exports.create = (req,res)=>{
    // validate request

//check if is empty
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
        //check if the price is a number
    }if(isNaN(req.body.price)){
      console.log("Not a valid option");
       res.redirect('/') ;
        //check if the description is not a number
    }  if(!isNaN(req.body.item)){
       console.log("Not a valid option");
       res.redirect('/') ;
        
    }
        
    // new chocolate
    const choc = new ChocolateDB({

        group : req.body.main_groups,
        item : req.body.item,
        price: req.body.price,
        isGlutenFree : req.body.glutenfree
    })

    // save it in the db
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

// retrieve and return the list of chocolates or return a single one
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
    let reqitems = choco.getName;
reqitem = "Milk Chocolate"
console.log(reqitem)
    ChocolateDB.findOneAndUpdate(
        { item: reqitem},
        {
            $set: {
                item: req.body.item,
                price: req.body.price
            }
        },
        {
            // insert if none selected
            upsert: true
        }
    )
        .then( res => {
            res.redirect('/');
        })
        .catch(error => console.error(error))
}

//delete chocolates

exports.delete = function(req, res) {
    let reqitem = "Milk Chocolate with Coconut"
    ChocolateDB.deleteOne({item: reqitem}, function (err, chocolates) {
        if (err) {
            res.status(400).json(err);
        }
       
    });
};
