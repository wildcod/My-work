$(function () {

    let mylist = $('#mylist');
    let btn = $('#btn');
    let input = $('#form1');

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
                   mylist.append("<li>" + todo.list + "</li>")
                  
                  
        })

    })


})