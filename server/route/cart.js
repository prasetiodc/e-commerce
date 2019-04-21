const router = require('express').Router()
const cart = require('../controllers/cart')
const {authentication, authorization} = require('../middleware/auth')

// router.get('/', product.findAll)
router.post('/', authentication, cart.create)
router.get('/', authentication, cart.findCart)
router.delete('/:id',authentication, authorization, cart.delete)
router.put('/:id', cart.update)

module.exports = router