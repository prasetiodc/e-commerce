const Model = require('../models/user')
const {hash, compare} = require('../helpers/bcrypt')
const {sign, verify} = require('../helpers/jwt')

class User{
    static create(req, res){
        let newUser = new Model({
            name: req.body.name,
            email: req.body.email,
            password: hash(req.body.password)
        })
        Model.create(newUser)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static login (req, res){

        Model.findOne({email:req.body.email})
        .then(found=>{

            if(compare(req.body.password, found.password)){
                let jwt = sign({_id: found._id, name: found.name, email:found.email})
                
                if(found.role){
                    res.status(201).json({token: jwt, role : found.role})
                }else{
                    res.status(201).json({token: jwt})

                }
            }
        })
    }

    static findAll(req, res){
        Model.find()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static delete(req, res){
        Model.findOneAndDelete({_id:req.params.id})
        .then(data=>{
            res.status(200).json("Delete Success")
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
}

module.exports = User