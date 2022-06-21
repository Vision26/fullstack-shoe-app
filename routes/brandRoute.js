const express = require('express')
const brandRoute = express.Router()
const Brand = require("../models/brand.js")

//Router - axios.get
brandRoute.get('/', (req, res, next) => {
    Brand.find((err, getBrands) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(getBrands)
    })
})

brandRoute.get('/search', (req, res, next) => {
    const { name } = req.query
    const pattern = new RegExp(name)
    Brand.find(
        { name: { $regex: pattern, $options: 'i'} },
        (err, brands) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(brands)
        }
    )
    
})

//Router - add to database - axios.post
brandRoute.post('/', (req, res, next) => {
const brandBody = new Brand(req.body)
brandBody.save((err, addBrand) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(addBrand)
})
})

module.exports = brandRoute