$(function(){

    let list = $('#list')
    let btn1 = $('#btn1')
    let btn2 = $('#btn2')
    let btn3 = $('#btn3')
    let tb1 = $('#tb1')

    $.get('/getdata' , function(data){
        
       for(array of data.students){
        list.append('<tr>' +  
        list.append('<td>' + array.id + '</td>') +
        list.append('<td>' + array.name + '</td>') +
        list.append('<td>' + array.class+ '</td>') +
        list.append('<td>' + array.rollno+ '</td>')+
        list.append('<td>' + array.age+ '</td>')+
        list.append('<td>' + array.city+ '</td>') 
        + '</tr>')
       }

    })

    btn1.click(function(){

          $.get('/' , function(data) {

          })

    })

})