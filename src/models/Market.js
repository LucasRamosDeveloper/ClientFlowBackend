const mongoose = require('mongoose')

const Market = new mongoose.Schema({
    
    market: {
        type: String,
        required: true
    },   

}, {
    timestamps: true
})

module.exports = mongoose.model('Market', Market)