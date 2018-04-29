
$(function () {

    let coolist = $('#coolist')
    let mylist = $('#mylist')
    let btn = $('#btn');
    let input = $('#form1');
    let btn1 = $('#btn1');
    let main = $('#main')


    let c1 = $('#c1')
    let c2 = $('#c2')
    let todolist = $('#todolist')
    coolist.hide()
    mylist.hide()
    let helper = null;

    let x = null;
	 
	 
	                                                                   /////// FIRST TODOLIST///////////
	
	 
	 
	//  $.get('/view' , function (data) {
    //     coolist.empty()

    //        for(todo of data.cool)
    //         coolist.append("<li>" + todo.list + "</li>")
                 
    // })

    c1.click(function (){
        x = 1;
         mylist.show()
         main.show();
         helper = $('#mylist')

    })
    
    c2.click(function (){
        x =2;
        coolist.show()
        main.show()
        helper = $('#coolist')

   })
   
    btn.click(function () {

        let value = input.val();
        $.post('/add', {value : value , x : x} , function (data, status){
        })

        
        $.post('/view' ,{x : x}, function (data) {
               helper.empty()

                  for(todo of data.todolist)
                   helper.append("<li >" + todo.list + "</li>")
                  
                  
        })

    })

    btn1.click(function () {

        $.post('/delete' ,{x : x}, function (data,status){

        })

        $.post('/view' , {x : x},function (data) {
            helper.empty()

               for(todo of data.todolist)
                helper.append("<li>" + todo.list + "</li>")
               
               
     })
               
               
     })
    })
