const route = require("express").Router();


const teachers = [
    { name: "sahil kanojia" , subject: "maths"},
    { name: "harshiv" , subject: "science"}
]

route.get('/', (req,res) => res.send(teachers))

module.exports = route