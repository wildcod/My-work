const express = require('express')
const path = require('path')
const db = require('./db')
const session = require('express-session')
const passport = require('./passport')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine' , 'hbs')

app.get('/' , (req,res) => { 

    if(req.user){

       return res.sendFile('index.html', { root: path.join(__dirname, './frontend') })
   }

   return res.redirect('/login')
})


app.use(express.static(path.join(__dirname , 'frontend')))


app.get('/getdata', (req,res) => {
    
    db.getAllStudents()
    .then((students)=>{
         res.send({students})
    })
    .catch((err) => {
        console.log(err)
    })
  

})

app.post('/addStudents' , (req,res) => {

    let name = req.body.name;
    let myclass = req.body.class;
    let rollno = parseInt(req.body.rollno)
    let age = parseInt(req.body.age)
    let city = req.body.city
    
    db.addNewStudent(name,myclass,rollno,age,city)
    .then(() => {
          res.redirect('/')
    })
    .catch(() => {

    })

})

app.get('/addStudents', (req,res) => {
      res.render('addStudent')
})


app.post('/deleteStudents' , (req,res) => {
    
    let rollno = parseInt(req.body.rollno)

    db.deleteStudent(rollno)
    .then(() => {
        res.redirect('/')
    })
})

app.get('/deleteStudents' , (req,res) => {
    
    res.render('deleteStudents')
    
})

app.get('/getOneStudent' , (req,res) => {
     res.render('getOneStudent')
})

app.post('/getOneStudent' , (req,res) => {
    

    let myrollno = parseInt(req.body.rollno)

    db.getOneStudent(myrollno)
    .then((student) => {
        console.log(student)
          res.render('OneStudentData' , {student})
    })
    .catch((err) => {
        console.log(err)
    })

})

app.post('/updateStudent',(req,res) => {
    let name = req.body.name;
    let myclass = req.body.class;
    let rollno = parseInt(req.body.rollno)
    let age = parseInt(req.body.age)
    let city = req.body.city

    db.updateStudent(name,myclass, rollno,age,city)
    .then(() => {
         res.redirect('/')
    })
    .catch((err) => {
        console,log(err)
    })

})

app.get('/updateStudent' ,(req,res) => {
    res.render('updateStudent')
})


app.get('/login' , (req,res) => {
    res.render('login')
})

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}))

app.listen(2233, () => console.log("server is start at 2233"))