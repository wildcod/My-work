const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('./db')

passport.serializeUser(function (user, done) {
    done(null, user.username)
})

passport.deserializeUser(function (username, done) {

    Users.getUser(username)
      .then((user) => {
        if (!user[0].username) {
            return done(new Error("No such user"))
        }
        return done(null, user[0])
    }).catch((err) => {
        return done(err)
    })
})

passport.use(new LocalStrategy(function (username, password, done) {
    
    Users.getUser(username)
    .then((user) => {
        if(!user[0].username){
            return done(null, false, {message: "No such user"})
        }
        if (user[0].password !== password) {
            return done(null, false, {message: "Wrong password"})
        }
        return done(null, user[0])
    })
    .catch((err) => {
        return done(err)
    })
}))

exports = module.exports = passport