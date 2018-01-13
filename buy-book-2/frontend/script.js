$(function () {

    let btn1 = $('#btn1')
    let btn2 = $('#btn2')
    let btn3 = $('#btn3')
    let btn4 = $('#btn4')
    let list = $('#list')
    let table = $('.table')
    

    btn1.click(function (){
          table.show()
          list.empty()
           $.post('/' , { name : "fashion-manners-and-customs"} , function (data){
               for(array of data){
                   list.append('<tr>' +
                   list.append('<th>' + array.rank + '</th>') +
                  list.append('<th>' + array.title + '</th>') +
                   list.append('<th>' + array.author + '</th>') +
                   list.append('<th>' + array.description + '</th>')

                   + '</tr>')
               }
           })
 
    })
    btn2.click(function (){
        table.show()
        list.empty()
         $.post('/' , { name : "hardcover-fiction"} , function (data){
             for(array of data){
                 list.append('<tr>' +
                 list.append('<th>' + array.rank + '</th>') +
                list.append('<th>' + array.title + '</th>') +
                 list.append('<th>' + array.author + '</th>') +
                 list.append('<th>' + array.description + '</th>')

                 + '</tr>')
             }
         })

  })
  btn3.click(function (){
    table.show()
    list.empty()
     $.post('/' , { name : "expeditions-disasters-and-adventures"} , function (data){
         for(array of data){
             list.append('<tr>' +
             list.append('<th>' + array.rank + '</th>') +
            list.append('<th>' + array.title + '</th>') +
             list.append('<th>' + array.author + '</th>') +
             list.append('<th>' + array.description + '</th>')

             + '</tr>')
         }
     })

})
btn4.click(function (){
    table.show()
    list.empty()
     $.post('/' , { name : "combined-print-and-E-book-fiction"} , function (data){
         for(array of data){
             list.append('<tr>' +
             list.append('<th>' + array.rank + '</th>') +
            list.append('<th>' + array.title + '</th>') +
             list.append('<th>' + array.author + '</th>') +
             list.append('<th>' + array.description + '</th>')

             + '</tr>')
         }
     })

})
})