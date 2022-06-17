const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema for post submittion
const shoeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shoeType: {
        type: String,
        required: true
    },
    inventors: {
        type: String,
        required: true
    },
    yearCreated: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Shoe', shoeSchema)