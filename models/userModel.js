const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    }

}, { timestamps: true })


module.exports = mongoose.model('user', userSchema);