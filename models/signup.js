const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signUpSchema = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
})

module.exports = mongoose.model('SignUp', signUpSchema)