const dbConfig  = require("../config/db")

const Sequielize = require('sequelize')

const sequelize = new Sequielize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
)

const db = {}

db.Sequielize = Sequielize
db.sequelize = sequelize
db.users = require("./user.model")(sequelize,Sequielize)
         
module.exports = db