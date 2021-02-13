const express = require('express')
const router = express.Router()
const ItemControl = require('./controllers/item.control')

router.get('/', ItemControl.getAllItems)

router.get('/:id', ItemControl.getItem)

router.post('/', ItemControl.createItem)

module.exports = router