var express = require('express');
var router = express.Router();
const ObjectId = require('mongodb').ObjectID;

router.get('/chocolates', (req, res, next) => {
    req.collection.find({}).toArray()
        .then(results => res.json(results)).catch(error => res.send(error))
});
router.post('/chocolates', (req, res, next) => {
   const {main_groups, item, price} = req.body;
   if(!main_groups || !item || !price){
       return res.status(400).json({
           message: 'All fields are required',
       });
   }
   const payload = {main_groups, item, price};
   req.collection.insertOne(payload)
       .then(result => res.json(result))
       .catch(error => res.send(error));

});

router.delete('/chocolates/:id'), (req, res, next) => {
    const {id} = req.params;
    const _id = ObjectId(id);

    req.collection.deleteOne({_id})
        .then(result => res.json(result))
        .catch(error => res.send(error))
}
module.exports= router;