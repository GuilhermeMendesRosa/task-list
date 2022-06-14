const Sequelize = require('sequelize')
const database = require('../db')

const List = database.define('list', {
    id_list: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = List;