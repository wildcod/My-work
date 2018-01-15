const route = require('express').Router()
const User = require('../db').Users
const path = require('path')
const passport = require('../passport')


route.get('/login', (req, res) => {
    res.render('login')
} )

route.get('/' , (req, res) => {
    if(req.user){
   return res.sendFile('index.html', { root: path.join(__dirname, '../frontend') })
    }
 return res.redirect('/login')
})

route.get('/signup', (req, res) => {
    res.render('signup')
} )

route.post('/signup' , (req, res) => {
    User.create({
        username: req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    }).then((createduser) => {
        res.redirect('/login')
    }).catch((err) => {
        throw(err)
    })
})

route.post('/login',passport.authenticate('local',
 { successRedirect: '/',
     failureRedirect: '/login' }));

exports = module.exports = route