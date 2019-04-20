const router = require('express').Router()
const cart = require('../controllers/cart')

// router.get('/', product.findAll)
router.post('/', cart.create)
router.get('/:id', cart.findCart)
// router.delete('/:id', product.delete)
router.put('/:id', cart.update)

module.exports = router