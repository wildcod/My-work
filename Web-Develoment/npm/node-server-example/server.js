const express = require("express")

const server = express() // it start the server

// server.get('/',function(req,res,next){
//     res.send("Hello World")
// })


// server.get('/greeter', function (req,res,next){
//      let greeting = "Good " + "Morning " + req.query.tod;
//      res.send(greeting)
// })

server.get('/html', function(req,res,next){
    res.send(`

    <html>
     <body>
          <h1> This is my HTML page </h1>
     </body>
    </html>
    `)
})



server.listen(2121);
