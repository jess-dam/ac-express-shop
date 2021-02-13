const ItemModel = require('../../models/item/item.model');


const createItem = async (req, res, next) => {
    const { name, type, price } = req.body

    try {
        const item = await ItemModel.create({ name, type, price })

        res.status(202).json({
            status: 'success',
            message: 'Item created successfully',
            item
        })

    } catch {
        res.status(500).json({
            status: 'failed',
            message: 'Item could not be created'
        })
    }

}

const getItem = async (req, res, next) => {
    try {
        console.log('hello')
        const item = await ItemModel.findById(req.params.id)

        if (!item) {
            res.status(404).json({
                status: 'failed',
                message: `Could not get item`,
                itemId
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully got item',
            item
        })

    } catch {
        res.status(500).json({
            status: 'failed',
            message: `Could not get item`,
            itemId
        })
    }
}

const getAllItems = async (req, res, next) => {
    try {
        const allItems = await ItemModel.find({})

        res.status(200).json({
            status: 'success',
            message: 'Got all items',
            items: allItems
        })

    } catch {
        res.status(500).json({
            status: 'failed',
            message: 'Could not get items'
        })
    }
}

const deleteItem = async (req, res, next) => {

}

const putOnSale = async (req, res, next) => {

}

const collectItem = async (req, res, next) => {

}

module.exports = { getAllItems, getItem, createItem }