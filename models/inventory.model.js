const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
    items: { type: [mongoose.Schema.Types.ObjectId], default: [] }
})

const InventoryModel = mongoose.model('Inventory', InventorySchema);

module.exports = InventoryModel;