
function fetchproducts(done){
    $.get('/api/products' , (data) => {
        done(data)
    })
}

function createCard(product){
         return (`
         <div class="card-body col-4">
           <h5 class="card-title">Phone</h5>
              <div>
                   <p>${product.name}</p>
                   <p>price : Rs ${product.price}</p>
                   <p>manufacturer : ${product.manufacturer}</p>
              </div>
           <button id="${product.name}" class="btn btn-primary">ADD TO CARD</button>
         </div>
     
         `)
}

$(function (){
    
    let itemlist = $('#itemlist')
    let cartlist = $('#cartlist')
    let mall = $('#mall')
    let cart = $('#cart')
    let btn = $('#Iphone')

    fetchproducts(function (products){
        itemlist.empty()
            for(product of products){
                itemlist.append(createCard(product))
            }
    })


   btn.click(function () {
        console.log("was clicked")
        mall.hide()
        cart.show()
        fetchproducts(function (products){
            cartlist.empty()
                for(product of products){
                    if(product.name === btn){
                    cartlist.append(createCard(product))}
                }
        })
    })



})