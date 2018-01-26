let socket = io();

socket.on('connected', ()=> {
    console.log('connected' + socket.id)
})

$(function (){
    let msglist = $('#msglist')
    let sendbtn = $('#sendmsg')
    let msgbox = $('#msgbox')


    sendbtn.click(function () {
        let msg = msgbox.val()

        socket.emit('send_msg', {message: msg})
    })

    socket.on('recv_msg' , function (data) {
        msglist.append($('<li>' + data.message + '</li>'))
    })
})