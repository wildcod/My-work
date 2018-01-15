const express = require('express')
const route = require('./routes/root')
const path = require('path')
const session = require('express-session')
const socketio = require('socket.io')
const http = require('http')
const passport = require('./passport')
const app = express()

let userSocket = {}

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set('view engine' , 'hbs')

const server = http.createServer(app)
const io = socketio(server)


app.use(session({
    secret : 'somesecretstring'
}))


app.use(passport.initialize())
app.use(passport.session())


app.use('/' , route)
app.use( express.static(path.join(__dirname , 'frontend')))



io.on('connection' , (socket) => {
    console.log('connection is formed from ' + socket.id)
    socket.emit('connected')

    socket.on('setUser' , (data) => {
          userSocket[data.name] = socket.id
          console.log(userSocket)
    })

    socket.on('sendmsg' , (data) => {

        if(data.message.startsWith('@')){
               let recipient = data.message.split(':')[0].substr(1)
               let recpt = userSocket[recipient]
               data.message = data.message.split(':')[1];

               io.to(recpt).emit('recv' , data)
        }
        else{
                 socket.broadcast.emit('recv' , data)
        }
    })
})

server.listen(5432, () => console.log('server is started'))