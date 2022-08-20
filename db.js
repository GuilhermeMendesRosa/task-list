const Sequelize = require("sequelize")
const sequelize = new Sequelize('task-list', 'postgres', 'SUA-SENHA', {
    dialect: 'postgresql',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize