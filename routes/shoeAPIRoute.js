const express = require('express')
const shoeAPIRoute = express.Router()
const ShoeAPI = require('../models/shoeAPI.js')

//data base - axios.get get info from database
shoeAPIRoute.get('/', (req, res, next) => {
    ShoeAPI.find((err, getShoe) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getShoe)
    })
})

//Router - axios.get - get shoes by brand Id
shoeAPIRoute.get('/:brandId', (req, res, next) => {
   ShoeAPI.find({brand: req.params.brandId}, (err, brands) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(brands)
   })
})

//Get specific item from database - axios.get - params
shoeAPIRoute.get('/:shoeId', (req, res, next) => {
    ShoeAPI.find(
        { _id: req.params.shoeId },
        (err, specific) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(specific)
        })
})


//database = axios.post - add
shoeAPIRoute.post('/', (req, res, next) => {
    const createShoe = new ShoeAPI(req.body)
    createShoe.save((err, addShoe) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(addShoe)
    })
})

//database - axios.delete - delete a post
shoeAPIRoute.delete('/:shoeId', (req, res, next) => {
    ShoeAPI.findOneAndDelete(
        { _id: req.params.shoeId },
        (err, deleteShoe) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`${deleteShoe.name} Deleted.`)
        })
})

//database - axios.put - update a post
shoeAPIRoute.put('/:shoeId', (req, res, next) => {
    ShoeAPI.findOneAndUpdate(
        { _id: req.params.shoeId },
        req.body,
        (err, update) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(update)
        }
    )
})

shoeAPIRoute.put('/likes/:shoeId', (req, res, next) => {
    ShoeAPI.findOneAndUpdate(
        {_id: req.params.shoeId},
        {$inc:{likes:1}},
        {new: true},
        (err, upOne) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(upOne)
        }
    )
})

//Saving Point - Work on axios.put, move on to getting params and queries
module.exports = shoeAPIRoute