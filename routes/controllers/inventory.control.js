const InventoryModel = require('../../models/inventory/inventory.model')

const createInventory = (userId) => {
    return await InventoryModel.create({ userId })
}

export { createInventory }