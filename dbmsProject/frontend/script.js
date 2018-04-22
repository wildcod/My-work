
$(function() {
   
    
    let itemlist = $('#itemlist')

    $.get('/view' , function(data,status){

          itemlist.empty()
            for(product of data.products){
                itemlist.append(`
                <div class="card-body col-4">
                <h5 class="card-title">Phone</h5>
                    <div>
                        <p>${product.name}</p>
                        <p>price : Rs ${product.price}</p>
                        <p>manufacturer : ${product.manufacturer}</p>
                    </div>
                <button id="${product.id}" class="btn btn-primary">ADD TO CARD</button>
                </div>

                `)
            }

    })

    $("body").on("click" ,"#1" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 1}, function(data,status){

        })
    })

    $("body").on("click" ,"#2" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 2}, function(data,status){

        })
    })

    $("body").on("click" ,"#3" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 3}, function(data,status){

        })
    })

    $("body").on("click" ,"#4" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 4}, function(data,status){

        })
    })

    $("body").on("click" ,"#5" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 5}, function(data,status){

        })
    })

    $("body").on("click" ,"#6" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 6}, function(data,status){

        })
    })

    $("body").on("click" ,"#7" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 7}, function(data,status){

        })
    })

    $("body").on("click" ,"#8" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 8}, function(data,status){

        })
    })

    $("body").on("click" ,"#9" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 9}, function(data,status){

        })
    })

    $("body").on("click" ,"#10" ,function(){
        console.log("hi")
        $.post('/addCart' , {msg : 10}, function(data,status){

        })
    })

    $("body").on("click" ,"#11" ,function(){
      
        $.post('/addCart' , {msg : 11}, function(data,status){

        })
    })

    $("body").on("click" ,"#12" ,function(){
        
        $.post('/addCart' , {msg : 12}, function(data,status){

        })
    })

    $("body").on("click" ,"#13" ,function(){
        
        $.post('/addCart' , {msg : 13}, function(data,status){

        })
    })

    $("body").on("click" ,"#14" ,function(){
       
        $.post('/addCart' , {msg : 14}, function(data,status){

        })
    })

    $("body").on("click" ,"#15" ,function(){
        
        $.post('/addCart' , {msg : 15}, function(data,status){

        })
    })

    $("body").on("click" ,"#16" ,function(){
        $.post('/addCart' , {msg : 16}, function(data,status){

        })
    })

})