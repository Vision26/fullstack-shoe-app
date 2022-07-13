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

// //Router - axios.get - get shoes by brand Id
// shoeRoute.get('/:brandId', (req, res, next) => {
//    Shoe.find({brand: req.params.brandId}, (err, brands) => {
//     if(err){
//         res.status(500)
//         return next(err)
//     }
//     return res.status(200).send(brands)
//    })
// })

// //Get specific item from database - axios.get - params
// shoeRoute.get('/:shoeId', (req, res, next) => {
//     Shoe.find(
//         { _id: req.params.shoeId },
//         (err, specific) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(specific)
//         })
// })


//database = axios.post - add
// shoeRoute.post('/:brandId', (req, res, next) => {
//     req.body.brand = req.params.brandId
//     const createShoe = new Shoe(req.body)
//     createShoe.save((err, addShoe) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(addShoe)
//     })
// })

shoeRoute.post('/', (req, res, next) => {
    const createNew= new Shoe(req.body)
    createShoe.save((err, addNew) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(addNew)
    })
})

//database - axios.delete - delete a post
shoeRoute.delete('/:shoeId', (req, res, next) => {
    Shoe.findOneAndDelete(
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
shoeRoute.put('/:shoeId', (req, res, next) => {
    Shoe.findOneAndUpdate(
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

// shoeRoute.put('/likes/:shoeId', (req, res, next) => {
//     Shoe.findOneAndUpdate(
//         {_id: req.params.shoeId},
//         {$inc:{likes:1}},
//         {new: true},
//         (err, upOne) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(upOne)
//         }
//     )
// })

//Saving Point - Work on axios.put, move on to getting params and queries
module.exports = shoeRoute