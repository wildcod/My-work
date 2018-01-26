const express = require('express')

const srv = express();

const todo = require("./routers/todo")

srv.use(express.json())
srv.use(express.urlencoded({extended : true}))

srv.get('/hello' , (req , res) => {
    res.send("Hello Sahil")
})

srv.use('/public', express.static(__dirname + "/public"))
srv.use('/todo',todo)

srv.listen(2323)

