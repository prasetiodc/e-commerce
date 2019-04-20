const router = require('express').Router()
const user = require('../controllers/user')

router.get('/', user.findAll)
router.post('/', user.create)
router.post('/login', user.login)

module.exports = router 