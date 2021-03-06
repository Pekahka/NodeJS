const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAMA, // DB Name
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // password
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)