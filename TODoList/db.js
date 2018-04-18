const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'todolist',
    user : 'todolist',
    password : 'todolist'
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

exports = module.exports = {
    getAllPersons,addNewList,deletePersons
}