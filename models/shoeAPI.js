const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema for post submittion
const shoeAPISchema = new Schema({
    imgUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ShoeAPI', shoeAPISchema)