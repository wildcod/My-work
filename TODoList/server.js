const express = require('express')
const path = require('path')
const db = require('./db')
const app = express()


app.use('/',express.static(path.join(__dirname , 'frontend')))

app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.get('/view' , (req,res) => {

    db.getAllPersons()
    .then((todolist) => {
        res.send({todolist})

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




app.listen(2222, () => console.log("Server is start at port 2222"))