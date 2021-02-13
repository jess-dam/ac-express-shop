const mongoose = require('mongoose');

const itemTypes = ['FOOD', 'PLANT', '???'];

const ItemSchema = new mongoose.Schema({
    name: { type: String, default: '???' },
    type: { type: String, enum: itemTypes, default: '???' },
    price: { type: Number, default: 0 },
    selling: { type: Boolean, default: false }
});

const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;