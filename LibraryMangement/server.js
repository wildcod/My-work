const express = require('express')
const path = require('path')
const db = require('./db')
const session = require('express-session')
const passport = require('./passport')

let temp = 1;
const app = express();
app.set("view engine", "hbs")


app.use(express.json())
app.use(express.urlencoded({extended : true}))

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


app.get('/view' , (req,res) => {

    db.getAllUsers()
    .then((users) => {
        res.send({users})

    })
    .catch((err) => {
        res.send(err)
    })

})

app.post('/Status' , (req,res) => {

    db.getStatus(req.body.Cname)
    .then((users) => {
        console.log(users)
        res.send({users})

    })
    .catch((err) => {
        res.send(err)
    })

})


app.post('/addIssue' , (req,res) => {

    db.addNewIssue(parseInt(req.body.Id),req.body.Name)
    .then((mesg) => {
        console.log(mesg)
       if(mesg == -1){
           temp = -1;
       }
        res.redirect('/')
    })
    .catch((err) => {
         res.send(err)
    })

})

app.post('/addBooks' , (req,res) => {

    if(temp == -1){
        return res.send("Limit over")
    }

    db.addNewBook(parseInt(req.body.Id),req.body.Bktitle,req.body.Issuedate,req.body.Returndate)
    .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
         res.send(err)
    })

})

app.post('/deleteReturn', (req,res) => {
    
     db.deleteReturn(parseInt(req.body.RId),req.body.RName)
         .then(() => {
                res.redirect('/')
         })
         .catch((err) => {
             res.send({mesg : "No such user"})
         })
})

app.post('/deleteBook' , (req, res) => {
    db.deleteReturnBook(parseInt(req.body.RId),req.body.Rbktitle)
    .then(() => {
           res.redirect('/')
    })
    .catch((err) => {
        res.send(err)
    })
})

app.get('/getAllBooks', (req,res) => {
    
    db.getAllBooks()
    .then((books) => {
         res.send({books})  
    })
    .catch(()=>{

    })
    
})

app.post('/signup', (req,res) => {

    userid =  parseInt(req.body.userid);
    password = req.body.password;
 
    db.addUsers(userid,password)
    .then((users)=>{
         
          res.redirect('/login')
    })
    .catch(()=>{

    })
})

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}))

app.get('/login' , (req,res) => {

    res.render('login')

})

app.get('/signup' , (req,res) => {

    res.render('signup')

})


app.listen(1020 , ()=> console.log('server is start at 1020'))