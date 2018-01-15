let socket = io();

socket.on('connected' , () => {
    console.log('connected')
})


$(function (){
     let chat = $('#chat')
     let btn3 = $('#btn3')
     let list = $('#list')
     let userlist = $('#userlist')

     let name = prompt('Enter your name')
     
    btn3.click(function (){
        let msg = chat.val()
        
        socket.emit('setUser' , {name : name})
        socket.emit('sendmsg' , {message : msg , name : name})
    })

    socket.on('recv' , (data) => {

        list.append($('<li>' + data.name + ": " + data.message +  '</li>')) 
    })
})