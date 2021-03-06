const mongoose = require('mongoose')

const User = new mongoose.Schema({

    user: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },    

}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)