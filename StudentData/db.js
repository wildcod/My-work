const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'students',
    password: 'students',
    database: 'students'
})


connection.query(
    `CREATE TABLE IF NOT EXISTS students (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        class VARCHAR(50) NOT NULL,
        rollno INTEGER(50) NOT NULL ,
        age INTEGER(50) NOT NULL,
        city VARCHAR(50) NOT NULL
    )`,
    function(err,results){
        if(err){ 
            console.error(err)
        }
        else{
            console.log(" Students Table was Succesfully created")
        }
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
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

function getAllStudents () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM students`,
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}

function addNewStudent(name,myclass, rollno,age,city) {

    return new Promise (function(resolve, reject) {
        connection.query(
            `INSERT INTO students (name, class,rollno,age, city) VALUES (?,?,?,?,?)`,
            [name,myclass,rollno, age, city],
            function(err, results) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}

function deleteStudent(rollno) {

    return new Promise (function(resolve, reject) {
        connection.query(
            `delete from students where rollno = ?`,
            [rollno],
            function(err, results) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}

function getOneStudent(name,myclass, rollno,age,city) {
  console.log(myrollno)
  console.log(typeof(myrollno))
    return new Promise (function(resolve, reject) {
        connection.query(
            `select * from students where rollno = ?`,
            [name,myclass, rollno,age,city],
            function(err, results) {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            }
        )
    })
}


function updateStudent(name,myclass, rollno,age,city) {

      return new Promise (function(resolve, reject) {
          connection.query(
              ` update students set name = ?,class = ? , age = ? , city = ? where rollno = ?`,
              [name,myclass,age,city, rollno],
              function(err, results) {
                  if (err) {
                      reject(err)
                  } else {
                      resolve(results)
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

exports = module.exports = {
    getAllStudents,
    addNewStudent,
    deleteStudent,
    getOneStudent,
    updateStudent,
    getUser
}