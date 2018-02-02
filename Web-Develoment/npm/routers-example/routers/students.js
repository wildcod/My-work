const route = require("express").Router();


const student = [
    { name: "sahil kanojia" , subject: "maths"},
    { name: "harshiv" , subject: "science"}
]

route.get('/', (req,res) => res.send(student))

module.exports = route