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
            return res.redirect('/addproducts')
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

app.get('/addproducts',(req,res) => {
      res.render('products')
})

app.post('/products', (req, res) => {
     
     db.addProducts(req.body.name,req.body.manufacturer,req.body.price)
     .then(()=>{
            res.redirect('/')
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

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}))

app.listen(1212 , () => console.log('server is start at 1212'))