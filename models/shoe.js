const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema for post submittion
const shoeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    shoeType: {
        type: String,
        required: true
    },
    inventors:{
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
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    }
})

module.exports = mongoose.model('Shoe', shoeSchema)