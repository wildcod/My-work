const route = require('express').Router()
const products = require('../db').Products

route.get('/' , (req, res) => {
    products.findAll()
             .then((product) => {
                 res.send(product)
             }).catch((err) => {
                 res.status(502).send({
                     error : "could not retrive product"
                 })
             })
})


route.post('/' , (req, res) => {
    products.create({
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price : parseFloat(req.body.price)
    }).then((product) => {
        res.send(product)
    }).catch((err) => {
        res.send({
            error : "could not add new product"
        })
    })
})



exports = module.exports = route