const express = require('express')
const route = require('./routes')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/' , express.static(path.join(__dirname , 'frontend')))
app.set('view engine' , 'hbs')
app.use('/api' , route)


app.listen(1001 , () => console.log('server is started'))