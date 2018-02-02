const route = require('express').Router();

const todo = [

]

route

route.get('/', function (req,res)  {
      res.send(todo)
})

route.post('/' , function (req,res)  {
      todo.push({
          task: req.body.task 
      })
      res.send(todo)
})

module.exports = route;