const route = require('express').Router()

route.use('/users' , require('./users'))
route.use('/products', require('./products'))
route.get('/addproducts' , (req, res) => {
    res.render('products')
})

route.get('/addusers' , (req, res) => {
    res.render('login')
})

exports = module.exports = route