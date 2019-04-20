const router = require('express').Router()
const product = require('./product')
const user = require('./user')
const cart = require('./cart')

router.use('/products', product)
router.use('/users', user)
router.use('/cart', cart)

module.exports = router