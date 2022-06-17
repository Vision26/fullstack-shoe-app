const express = require('express')
const shoeRoute = express.Router()
const Shoe = require('../models/shoe.js')

//data base - axios.get get info from database
shoeRoute.get('/', (req, res, next) => {
    Shoe.find((err, getShoe) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getShoe)
    })
})

//database = axios.post - add
shoeRoute.post('/', (req, res, next) => {
    const createShoe = new Shoe(req.body)
    createShoe.save((err, addShoe) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(addShoe)
    })
})

//database - axios.delete - delete a post
shoeRoute.delete('/:shoeId', (req, res, next) => {
Shoe.findOneAndDelete(
    {_id: req.params.shoeId}, 
    (err, deleteShoe) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`${deleteShoe.name} Deleted.`)
})
})

//database - axios.put - update a post
shoeRoute.put('/:shoeId', (req, res, next) => {
    Shoe.findOneAndUpdate(
        {_id: req.params.shoeId},
        red.body,
        (err, update) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(update)
        }
    )
})

//Saving Point - Work on axios.put, move on to getting params and queries
module.exports = shoeRoute