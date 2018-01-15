const Sequelize = require('sequelize')


const db = new Sequelize("db2", "chat" , "chat", {
    host : "localhost",
    dialect: "mysql"
})

const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: { 
    type : Sequelize.STRING,
    allowNull : false
    },

    lastName:{
    type : Sequelize.STRING,
    allowNull : true
    }
})

db.sync().then(() => console.log("database is created")) 


exports = module.exports = {
    db,Users
}
