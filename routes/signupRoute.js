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

signUpRoute.delete('/:signId', (req, res, next) => {
    SignUp.findOneAndDelete(
        {_id: req.params.signId},
        (err, delSign) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(200).send(`${delSign.firstName} Deleted.`)
        }
        )
})

signUpRoute.put('/:signId', (req, res, next) => {
    SignUp.findOneAndUpdate(
        {_id: req.params.signId},
        req.body,
        {new: true},
        (err, updated) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updated)
        }
    )
})
module.exports = signUpRoute