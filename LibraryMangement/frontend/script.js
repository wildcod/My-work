$(function (){

     let uid = $('#uid');
     let name = $('#name')
     let bktitle = $('#bktitle');
     let btn = $('#btn');
     let view = $('#view')
     let list = $('#list')
     let issuedate = $('#issuedate')
     let returndate = $('#returndate')
     let Rname = $('#Rname');
     let Rbktitle = $('#Rbktitle')
     let btn1 = $('#btn1');
     let Ruid = $('#Ruid');
     let msg = $('#msg');
     let mylist = $('#mylist');
     let Cid = $('#Cid');
     let btn2 = $('#btn2');
     let form = $('#form');
     let form1 = $('#form1')
     let viewBooks = $('#3');
     let tb3list = $('#tb3list')
     let tb3 = $('#tb3');
     let tb = $('#tb');
   

     view.click(function () {

        form.hide()
       form1.hide()
       tb3.hide()
       tb.hide()

         $.get('/view' , function (data,status){
            list.empty()
            console.log(data)
             for(array of data.users){
                list.append('<tr>' +
                list.append('<td>' + array.userid + '</td>') +
                list.append('<td>' + array.name + '</td>') +
                list.append('<td>' + array.unIssuebooks+ '</td>') +
                list.append('<td>' + array.Issuebooks + '</td>') +
                list.append('<td>' + array.booktitle + '</td>') +
                list.append('<td>' + array.Issuedate + '</td>') +
                list.append('<td>' + array.Returndate + '</td>')

                + '</tr>')
            }

         })

         tb.show()

     })

     btn2.click(function () {

       let Cname = $('#Cname').val();


        $.post('/Status' ,{Cname : Cname}, function (data,status){
           mylist.empty()
           console.log(data)
           let i = 1;
            for(array of data.users){
               mylist.append('<tr>' +  
               mylist.append('<td>' + i + '</td>') +
               mylist.append('<td>' + array.name + '</td>') +
               mylist.append('<td>' + array.unIssuebooks+ '</td>') +
               mylist.append('<td>' + array.Issuebooks + '</td>') +
               mylist.append('<td>' + array.booktitle + '</td>') +
               mylist.append('<td>' + array.Issuedate + '</td>') +
               mylist.append('<td>' + array.Returndate + '</td>')

               + '</tr>')
               i++;
           }

        })

    })

     btn.click(function(){
        
          let Id = parseInt(uid.val());
          let Name = name.val();
          let Bktitle = bktitle.val()
          let Issuedate = issuedate.val()
          let Returndate = returndate.val()

          console.log(Bktitle);
          console.log(typeof(Id))

          $.post('/addIssue', {Id:Id,Name:Name}, 
          function(data){ 
          })

          $.post('/addBooks', {Id:Id,Bktitle:Bktitle,Issuedate:Issuedate,Returndate:Returndate}, 
          function(data){
              console.log(data)
                 if(data === "Limit over"){
                    msg.append('<h5>' + 'Not eligilble' + '</h5>')
                 }
                 else{
                    msg.append('<h5>' + 'Issue Successfully' + '</h5>')
                 }
          })

     })

     btn1.click(function(){
        
        let RId = parseInt(Ruid.val());
        let RName = Rname.val();
        let RBktitle = Rbktitle.val()


        $.post('/deleteReturn', {RId:RId,RName:RName}, 
        function(data){
               msg.append('<h5>' + 'Returnded Successfully' + '</h5>')
        })
         console.log("script 1")
        $.post('/deleteBook', {RId:RId,Rbktitle:RBktitle}, 
        function(data){
                 console.log("script 2")
        })

   })

   let btnIssue = $('#1')
   let btnReturn = $('#2')
   let btnBooks = $('#3')


   btnIssue.click(function () {
          form1.hide();
          tb3.hide();
           form.show()
           tb.hide()
   })

   btnReturn.click(function(){
       form.hide()
       tb3.hide()
       form1.show();
       tb.hide()
   })

   viewBooks.click(function (){
       
             form.hide()
             form1.hide()
             tb.hide()        
    
            $.get('/getAllBooks', function (data, status){
      
               tb3list.empty()
                console.log(data)
                 for(array of data.books){
                    tb3list.append('<tr>' +  
                    tb3list.append('<td>' + array.id + '</td>') +
                    tb3list.append('<td>' + array.books + '</td>') +
                    tb3list.append('<td>' + array.author+ '</td>')  
                    + '</tr>')
                 
            }
            })
             tb3.show();
   })
 
})