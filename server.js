const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/shoedb',
() => console.log("database connected.")
)

app.use('/collectors', require('./routes/shoeRoute'))
app.use('/shoeapi', require('./routes/shoeAPIRoute'))
app.use('/signup', require('./routes/signupRoute'))

app.use((err, req, res, next) => {
    return res.send({
        errMsg: err
    })
})

app.listen(9000, () => {
    console.log("Server - 9000 - Connected")
})