const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('./db')

passport.serializeUser(function (user, done) {
    done(null, user.userid)
})

passport.deserializeUser(function (userid, done) {

    db.getloginUsers(userid)
    .then((user) => {
        if(!user[0].userid){
            return done(new Error("No such user"))
        }
        return done(null,user[0])
    }).catch((err) => {
        done(err)
    })
})

passport.use(new LocalStrategy(function (userid, password, done) {

    db.getloginUsers(userid)
    .then((user) => {
        if(!user[0].userid){
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