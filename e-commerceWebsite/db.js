const Sequelize = require('sequelize')

const db = new Sequelize ('amazon' , 'amazon' , 'amazon' , {
    host : 'localhost',
    dialect : 'mysql'
})

const Users = db.define('Users' , {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

const Products = db.define('Products' , {
    name : {
        type : Sequelize.STRING,
        allowNull: false
    }
    ,
    manufacturer : {
        type : Sequelize.STRING,
        allowNull: false
    },
    price : {
        type : Sequelize.FLOAT,
        defaultValue : 0.00
    }
})

db.sync().then(() => console.log("Database is created"))

exports = module.exports = {
    Users,Products
}