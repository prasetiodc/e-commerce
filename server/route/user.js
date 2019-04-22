const router = require('express').Router()
const user = require('../controllers/user')

router.get('/', user.findAll)
router.post('/', user.create)
router.post('/login', user.login)
router.delete('/:id', user.delete)

module.exports = router 