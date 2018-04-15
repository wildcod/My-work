const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'rizu',
    user : 'rizu',
    password : 'rizu'
})


connection.query(
    `CREATE TABLE IF NOT EXISTS users (
        userid int(6),
     Issuebooks int(20),
     unIssuebooks  int(20),
     name  VARCHAR(40)
    )`,
    function(err,result){
        if(err){
            console.error(err)
        }
        else{
            console.log("Users Table was Succesfully created")
        }
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS books (
         userid int(6),
         booktitle  VARCHAR(50),
         Issuedate  VARCHAR(20),
         Returndate VARCHAR(20)
         )`,
    function(err,result){
        if(err){
            console.error(err)
        }
        else{
            console.log("Books Table was Succesfully created")
        }
    }
)
 //  where users.userid = books.userid,
function getAllUsers () {

    return new Promise(function (resolve,reject){

        connection.query(
            `select users.userid,users.name,users.unIssuebooks,users.Issuebooks,books.booktitle,
            books.Issuedate,books.Returndate from users,books
             where users.userid = books.userid `,
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

function getStatus (Cname) {

    return new Promise(function (resolve,reject){

        connection.query(
            `select name,unIssuebooks,Issuebooks,booktitle,
            Issuedate,Returndate from users cross join books on users.userid= books.userid AND users.name =?`,
            [Cname],
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


function addNewBook (Id,Bktitle,Issuedate,Returndate) {

    return new Promise(function (resolve,reject){

        connection.query(
            `insert into books values (?,?,?,?)`,
            [Id,Bktitle,Issuedate,Returndate],
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

function deleteReturnBook (RId,Rbktitle) {
         console.log(Rbktitle + " " + RId)
    return new Promise(function (resolve,reject){
          
        connection.query(
            `delete from books where userid=? AND booktitle=?`,
            [RId,Rbktitle],
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


function addNewIssue (Id,Name){

    return new Promise(function (resolve,reject){

        connection.query(
            ' select name from users where FIND_IN_SET(?,userid)',
               [Id]   
            ,
            function (err,results){
                console.log(results.length)
                if(results.length == 0){
                    connection.query(
                        `insert into users values (?,?,?,?)`,
                        [Id,1,2,Name],
                        function (err,results){
                            if(err){
                                reject(err)
                            }else{
                                resolve(results)
                            }
                        }
                    )
                }
                else{

                    connection.query(
                        ` select Issuebooks from users where userid = ?`,
                        [Id],
                        function(err,results){
                          if(results[0].Issuebooks < 3){
                             connection.query(
                                `update users set unIssuebooks = unIssuebooks-1 , issuebooks = issuebooks+1 where userid = ?`,
                                [Id],
                                function (err,results){
                                    if(err){
                                        reject(err)
                                    }else{
                                        resolve(results)
                                    }
                                }
                            )
                        }
                        else{
                          resolve(-1)
                        }
                        }
                    
                    )
                    
                }
            }
        )

    })

}

function deleteReturn (RId,RName){

    return new Promise(function (resolve,reject){

        connection.query(
            ' select name from users where FIND_IN_SET(?,userid)',
               [RId]   
            ,
            function (err,results){
                if(results.length == 0){
                      resolve(results);
                }
                else{
                    connection.query(
                        `update users set unIssuebooks = unIssuebooks+1 , issuebooks = issuebooks-1 where userid = ?`,
                        [RId],
                        function (err,results){
                            if(err){
                                reject(err)
                            }else{
                                resolve(results)
                            }
                        }
                    )
                    
                }
            }
        )

    })

}


function getAllBooks () {

    return new Promise(function (resolve,reject){

        connection.query(
            `select * from libbooks `,
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
            `insert into validusers values (?,?)`,
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

function getloginUsers (userid) {

    return new Promise(function (resolve,reject){

        connection.query(
            `select * from validusers where userid=?`,
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




exports = module.exports = {
    getAllUsers,addNewIssue,addNewBook,deleteReturnBook,deleteReturn,getStatus,getAllBooks,
    addUsers,getloginUsers
}