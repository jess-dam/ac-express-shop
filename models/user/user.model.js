const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    inventory: { type: mongoose.Types.ObjectId, required: false }
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;