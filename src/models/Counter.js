const mongoose = require('mongoose')

const Counter = new mongoose.Schema({
    
    counter: {
        type: Number,
        required: true
    },   

}, {
    timestamps: true
})

module.exports = mongoose.model('Counter', Counter)