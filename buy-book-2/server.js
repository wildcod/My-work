const express = require('express')
const path = require('path')
const request = require('request')
const app = express()


let array;
let data;

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/' , express.static(path.join(__dirname , 'frontend')))


app.post('/' , (req, res) => {

  let api1 = "https://api.nytimes.com/svc/books/v3/lists/current/"
  let api2 =  req.body.name
  let api3 = ".json?api-key=2201fbc06ced45c0aa08e02a33e0178a"

   let url = api1 + api2 + api3
request.get({url : url
}, function(err, response, body) {
    data = response.body
    data = JSON.parse(data) 
    array = data.results.books
    res.send(array)
 })
 
  
})

app.listen(2345 , () => console.log("server is started"))