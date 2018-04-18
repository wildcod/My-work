$(function () {

    let mylist = $('#mylist');
    let btn = $('#btn');
    let input = $('#form1');
    let btn1 = $('#btn1');

    $.get('/view' , function (data) {
        mylist.empty()

           for(todo of data.todolist)
            mylist.append("<li>" + todo.list + "</li>")
           
           
 })
    
   
    btn.click(function () {

        let value = input.val();
        $.post('/add', {value : value} , function (data, status){
        })

        
        $.get('/view' , function (data) {
               mylist.empty()

                  for(todo of data.todolist)
                   mylist.append("<li class='list-group-item'>" + todo.list + "</li>")
                  
                  
        })

    })

    btn1.click(function () {

        $.get('/delete' , function (data,status){

        })

        $.get('/view' , function (data) {
            mylist.empty()

               for(todo of data.todolist)
                mylist.append("<li>" + todo.list + "</li>")
               
               
     })
               
               
     })

    })
