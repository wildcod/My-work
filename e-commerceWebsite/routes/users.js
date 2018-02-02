const route = require('express').Router()
const User = require('../db').Users

route.get('/' , (req, res) => {
     User.findAll().then((users) => {
         res.send(users)
     }).catch((err) => {
         res.send({
           error : "could not retrive user"     
         })
     })


})

route.post('/' , (req, res) => {
    User.create({
        name : req.body.name
    }).then((users) => {
        res.send(users)
    }).catch((err) => {
        res.send({
            error : "could not add new user"
        })
    })
})

exports = module.exports = route