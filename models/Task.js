const Sequelize = require('sequelize')
const database = require('../db')
const List = require('../models/List')

const Task = database.define('task', {
    id_task: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true, 
        unique: true,
        fields: ['id_task']
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
})

Task.belongsTo(List, {
    constraint: true,
    foreignKey: 'id_list'
});

List.hasMany(Task, {
    foreignKey: 'id_list'
});

module.exports = Task;
