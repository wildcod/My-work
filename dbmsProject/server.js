const express = require('express')
const path = require('path')
const db = require('./db')
const session = require('express-session')
const passport = require('./passport')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())


let temp = new Array;
let arr = new Array;

let name = "";


app.set('view engine' , 'hbs')

app.get('/' , (req,res) => { 

     if(req.user){

        if(req.user.username == "amazon" && req.user.password == "amazon"){
            return res.redirect('/myproducts')
         }

        return res.sendFile('index.html', { root: path.join(__dirname, './frontend') })
    }

    return res.redirect('/login')
})

app.use(express.static(path.join(__dirname , 'frontend')))

app.get('/name',(req,res) => {
    res.send(name)
})

app.get('/view', (req, res) => {

    db.addView()
    .then((products)=>{
           res.send({products})
    })
    .catch((err)=>{
        console.error(err)
    })

})

app.get('/myproducts',(req,res) => {
      res.render('products')
})

app.post('/products', (req, res) => {
     
     db.addProducts(req.body.name,req.body.manufacturer,req.body.price)
     .then(()=>{
            res.redirect('/addProducts')
     })
     .catch((err)=>{
         console.error(err)
     })

})

app.post('/addCart' , (req, res) => {
    db.getCart(parseInt(req.body.msg))
    .then((product)=>{
        // res.render('addToCart',{product})
        
        let id = product[0].id;
        let name = product[0].name;
        let manufacturer = product[0].manufacturer;
        let price = product[0].price;

        db.addToCart(id,name,manufacturer,price)
        .then(() => {
            temp.push(product)
        })
    })
    .catch((err) => {

    })

})

app.get('/addToCart', (req,res)=>{
        console.log(temp)
        res.render('addToCart',{temp})

})

app.get('/buyCartProducts', (req,res)=>{
    
    res.render('buyCartProducts')

})

app.post('/finalpage',(req,res) => {

    let data = {
        name : req.body.name,
      mob : parseInt(req.body.phoneNumber),
      add : req.body.address,
      pin : parseInt(req.body.pincode),
      state : req.body.state
    }
    res.render('finalPage', {data})

})

app.get('/signup', (req,res) => {
    res.render('signup')
})

app.get('/login', (req,res) => {
    res.render('login')
})

app.post('/signup', (req, res) => {

    username = req.body.username
    password = req.body.password
    firstName = req.body.firstName
    lastName = req.body.lastName

    db.addUsers(username,password,firstName,lastName)
     .then((createdUser) => {
        res.redirect('/login')
    })
    .catch((err) => {
        res.send(err)
    })
})


app.post('/deleteProducts', (req,res) => {

     db.deleteProducts(parseInt(req.body.id),req.body.name)
     .then(()=>{
         res.redirect('/');
     })

})

app.post('/updateProducts', (req,res) => {

    db.updateProducts(parseInt(req.body.id),req.body.name,req.body.manufacturer,req.body.price)
    .then(()=>{
        res.redirect('/');
    })

})

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}))


app.post('/deleteFromCart', (req,res) => {

    db.deletefromcart(req.body.id)
    .then(() => {
        // let i = 0;
        // for(data of temp){
        //     console.log(data[0])
        //     if(data[0].id == req.body.id){
        //         temp.splice(i, 1);
        //     }
        //     i++;
        // }
        // console.log("data " + data)

       db.getAllCartProduct()
       .then((cart ) => {
           temp = []
            temp.push(cart)
            res.redirect('/addToCart')
       })
              
    }).catch(()=>{

    })

})

app.get('/deleteProducts',(req,res) => {
    res.render('deleteProducts')
})

app.get('/updateProducts',(req,res) => {
    res.render('updateProducts')
})

app.get('/addProducts',(req,res) => {
    res.render('addProducts')
})

app.listen(7788 , () => console.log('server is start at 5566'))