const router = require('express').Router()
const product = require('../controllers/product')
const gcs = require('../helpers/gcs')

router.get('/', product.findAll)
router.get('/:id', product.findOne)
router.post('/', gcs.multer.single("image"), gcs.sendUploadToGCS, product.create)
router.delete('/:id', product.delete)
router.put('/:id', product.update)
// router.put('/:id', gcs.multer.single("image"), gcs.sendUploadToGCS, product.update)

module.exports = router