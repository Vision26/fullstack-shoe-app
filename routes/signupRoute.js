const express = require('express')
const signUpRoute = express.Router()
const SignUp = require('../models/signup.js')

signUpRoute.get('/', (req, res, next) => {
    SignUp.find((err, getInfo) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getInfo)
    })
})

signUpRoute.post('/', (req, res, next) => {
    const newLogin = new SignUp(req.body)
    newLogin.save((err, addNewLogin) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(addNewLogin)
    })
})

module.exports = signUpRoute