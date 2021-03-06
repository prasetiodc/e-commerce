const Model = require('../models/product')

class Product{
    static findAll(req, res){
        Model.find()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static create(req, res){
        let newProduct = new Model({
            name: req.body.name,
            image: req.file.cloudStoragePublicUrl,
            price: req.body.price,
            stock: req.body.stock
        })
        Model.create(newProduct)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static findOne(req, res){
        Model.findById(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static delete(req, res){
        Model.deleteOne({_id:req.params.id})
        .then(data=>{
            res.status(200).json("Delete Success")
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static update(req, res){
        let newData        
        // if(req.file.cloudStoragePublicUrl=='undefined'){
        //     newData = {
        //         name: req.body.name,
        //         price: req.body.price,
        //         stock: req.body.stock
        //     }
        // }else{
        //     newData = {
        //         name: req.body.name,
        //         price: req.body.price,
        //         image: req.file.cloudStoragePublicUrl,
        //         stock: req.body.stock
        //     }
        // }
        newData = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock
        }
        console.log(newData);
        
        Model.findOneAndUpdate({_id:req.params.id}, { $set: newData }, {new:true})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
}

module.exports = Product