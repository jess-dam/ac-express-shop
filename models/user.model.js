const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    inventory: { type: mongoose.Types.ObjectId }
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;