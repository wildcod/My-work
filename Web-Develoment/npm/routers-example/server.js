const express = require("express")

const srv = express()

const student = require('./routers/students')
const teachers = require('./routers/teachers')

srv.use('/students',student)
srv.use('/teachers',teachers)

srv.listen(2233)