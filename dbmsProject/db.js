const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'products',
    user : 'products',
    password : 'products'
})


connection.query(
    `CREATE TABLE IF NOT EXISTS products (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        manufacturer VARCHAR(50) NOT NULL,
        price VARCHAR(50) NOT NULL
    )`,
    function(err,result){
        if(err){ 
            console.error(err)
        }
        else{
            console.log(" Products Table was Succesfully created")
        }
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL
    )`,
    function(err,result){
        if(err){ 
            console.error(err)
        }
        else{
            console.log(" users Table was Succesfully created")
        }
    }
)



connection.query(
    `CREATE TABLE IF NOT EXISTS cart (
        id INTEGER  ,
        name VARCHAR(50) NOT NULL,
        manufacturer VARCHAR(50) NOT NULL,
        price VARCHAR(50) NOT NULL
    )`,
    function(err,result){
        if(err){ 
            console.error(err)
        }
        else{
            console.log(" cart Table was Succesfully created")
        }
    }
)



function addProducts (name,manufacturer,price) {

    return new Promise(function (resolve,reject){

        connection.query(
            'INSERT INTO products (name,manufacturer,price) VALUES (?,?,?)',
             [name,manufacturer,price],
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )

    })

}

function addView () {

    return new Promise(function (resolve,reject){

        connection.query(
            'SELECT id,name,manufacturer,price FROM products',
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )

    })

}

function getCart(id) {
    return new Promise(function (resolve,reject){

        connection.query(
            'select * from products where id = ?',
            [id],
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )

    })

}


function addUsers(username,password,firstName,lastName) {
    return new Promise(function (resolve,reject){

        connection.query(
            'insert into users (name,username,password) values (?,?,?)',
            [firstName+lastName,username,password],
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )

    })

}

function getUser(username) {
    return new Promise(function (resolve,reject){

        connection.query(
            'select username, password from users where username = ?',
            [username],
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )

    })

}

function addToCart (id,name,manufacturer,price) {

    return new Promise(function (resolve,reject){

        connection.query(
            'INSERT INTO cart (id,name,manufacturer,price) VALUES (?,?,?,?)',
             [id,name,manufacturer,price],
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )

    })

}


exports = module.exports = {
      addProducts,addView,getCart,addUsers,getUser,addToCart
} 