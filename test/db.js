const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'db2',
    user : 'root'
})


connection.query(
    `CREATE TABLE IF NOT EXISTS todolist (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        list VARCHAR(50) NOT NULL
    )`,
    function(err,result){
        if(err){
            console.error(err)
        }
        else{
            console.log("Table was Succesfully created")
        }
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
         userid  VARCHAR(20),
         password VARCHAR(20)
         )`,
    function(err,result){
        if(err){
            console.error(err)
        }
        else{
            console.log("users Table was Succesfully created")
        }
    }
)


function getAllPersons () {

    return new Promise(function (resolve,reject){

        connection.query(
            'SELECT list FROM todolist',
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

function deletePersons () {

    return new Promise(function (resolve,reject){

        connection.query(
            'DELETE FROM todolist ORDER BY id desc limit 1',
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

function getloginUsers (userid) {

    return new Promise(function (resolve,reject){

        connection.query(
            `select * from users where userid=?`,
            [userid],
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

function addUsers (userid,password) {

    return new Promise(function (resolve,reject){

        connection.query(
            `insert into users values (?,?)`,
            [userid,password],
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

function addNewList (value){

    return new Promise(function (resolve,reject){

        connection.query(
            'INSERT INTO todolist (list) VALUES (?)',
               [value]   
            ,
            function (err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve(results)
                }
            }
        )

    })

}




connection.query(
    `CREATE TABLE IF NOT EXISTS cool (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        list VARCHAR(50) NOT NULL
    )`,
    function(err,result){
        if(err){
            console.error(err)
        }
        else{
            console.log("Table was Succesfully created")
        }
    }
)

function getAllPersons (x) {

    return new Promise(function (resolve,reject){
     if(x == 1){
        connection.query(
            'SELECT list FROM todolist',
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    }else{
        connection.query(
            'SELECT list FROM cool',
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    }

    })

}

function deletePersons (x) {

    return new Promise(function (resolve,reject){

        if(x == 1){
        connection.query(
            'DELETE FROM todolist ORDER BY id desc limit 1',
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    }
    else{
        connection.query(
            'DELETE FROM cool ORDER BY id desc limit 1',
            function (err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    }

    })

}

function addNewList (value,x){

    return new Promise(function (resolve,reject){


        if(x == 1){

        connection.query(
            'INSERT INTO todolist (list) VALUES (?)',
               [value]   
            ,
            function (err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve(results)
                }
            }
        )
    }
    else{
        connection.query(
            'INSERT INTO cool (list) VALUES (?)',
               [value]   
            ,
            function (err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve(results)
                }
            }
        )
    }

    })


}













exports = module.exports = {
    getAllPersons,addNewList,deletePersons,getloginUsers,addUsers
}