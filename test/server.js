const express = require('express')
const path = require('path')
const db = require('./db')
const session = require('express-session')
const passport = require('./passport')

const app = express()



app.set('view engine' ,"hbs")

app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())



app.get('/' , (req,res) => {
    if(req.user){
       return res.sendFile('index.html', { root: path.join(__dirname, './frontend') })
    }
    return res.redirect('/login')
})

app.use(express.static(path.join(__dirname , 'frontend')))

app.post('/view' , (req,res) => {

    db.getAllPersons(parseInt(req.body.x))
    .then((todolist) => {
        res.send({todolist})

    })
    .catch((err) => {
        res.send(err)
    })

})

app.post('/signup', (req,res) => {

    userid =  req.body.userid;
    password = req.body.password;
 
    db.addUsers(userid,password)
    .then((users)=>{
         
          res.redirect('/login')
    })
    .catch(()=>{

    })
})

app.post('/delete' , (req,res) => {

    db.deletePersons(parseInt(req.body.x))
    .then(() => {
        res.redirect('/')

    })
    .catch((err) => {
        res.send(err)
    })

})

app.post('/add' , (req,res) => {


    db.addNewList(req.body.value,parseInt(req.body.x))
    .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
         res.send(err)
    })

})

app.get('/view' , (req,res) => {

    db.getAllPersons()
    .then((cool) => {
        res.send({cool})

    })
    .catch((err) => {
        res.send(err)
    })

})

app.get('/delete' , (req,res) => {

    db.deletePersons()
    .then(() => {
        res.redirect('/')

    })
    .catch((err) => {
        res.send(err)
    })

})

app.post('/add' , (req,res) => {
    
    db.addNewList(req.body.value)
    .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
         res.send(err)
    })

})

app.get('/login' , (req,res) => {
    res.render('login')
})

app.get('/signup' , (req,res) => {
    res.render('signup')
})


app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}))








app.listen(2222, () => console.log("Server is start at port 2222"))
