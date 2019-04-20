require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const route = require('./route')
const port = 3000

let app= express()

mongoose.connect('mongodb://localhost/ecommerce', {useNewUrlParser: true})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/', route)

app.listen(port, ()=>{
    console.log(`Listen on ${port}`);
})

module.exports = app