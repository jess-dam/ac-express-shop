const UserModel = require('../../models/user/user.model')
const InventoryControl = require('./inventory.control')

const signUp = async (res, req, next) => {
    const { username } = req.body;
    const user = await UserModel.create({ username })
    await InventoryControl.createInventory(user._id)

    res.status(202).json({
        status: 'success',
        message: 'User has signed up successfully',
        userId: user._id
    })
}


module.exports = { signUp }