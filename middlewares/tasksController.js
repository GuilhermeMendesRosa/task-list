const Task = require('../models/Task')
const List = require('../models/List')

const getAllLists = async (req, res) => {
    let lists = await List.findAll()
    res.render('allLists', {lists})
}
const getCreateList = (req, res) => {
    res.render('createList')
}
const getList = async (req, res) => {
    let id = req.params.id_list
    let tasks = await Task.findAll( {where: {
        id_list: id
    }})
    let list = await List.findByPk(id)
    res.render('list', {tasks, list})
}
const getCreateTask = (req, res) => {
    let id_list = req.params.id_list
    res.render('createTask', {id_list})
}
const getEditTask = async (req, res) => {
    let id_list = req.params.id_list
    let task = await Task.findByPk(req.params.id_task)
    res.render('editTask', {task, id_list})
}
const getEditList = async (req, res) => {
    let id_list = req.params.id_list
    let list = await List.findByPk(id_list)
    res.render('editList', {list})
}
const getChangeStatus = async (req, res) => {
    let id_list = req.params.id_list
    let task = await Task.findByPk(req.params.id_task);
    task.status = !(task.status)
    await task.save()
    res.redirect('/list/' + id_list)
}



const postCreateList = async (req, res) => {
    const novaLista = await List.create({nome: req.body.nome})
    novaLista instanceof List
    let id_list = novaLista.id_list
    res.redirect('/list/'+id_list)
}
const postCreateTask = async (req, res) => {
    let id_list = req.params.id_list
    await Task.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        id_list: id_list
    })
    res.redirect('/list/' + id_list)
}
const postEditList = async (req, res) => {
    let id_list = req.params.id_list
    let nome = req.body.nome
    let list = await List.findByPk(id_list)
    list.nome = nome;
    await list.save();
    res.redirect('/')
}
const postEditTask = async (req, res) => {
    let id_list = req.params.id_list
    let id_task = req.params.id_task

    let nome = req.body.nome
    let descricao = req.body.descricao

    let task = await Task.findByPk(id_task)
    task.nome = nome;
    task.descricao = descricao;
    await task.save();
    res.redirect('/list/' + id_list)
}


const deleteTask = async (req, res) => {
    let id_list = req.params.id_list
    let task = await Task.findByPk(req.params.id_task)
    await task.destroy();
    res.redirect('/list/' + id_list)
}
const deleteList = async (req, res) => {
    let id_list = req.params.id_list
    let list = await List.findByPk(id_list)
    await Task.destroy({where: {id_list}});
    await list.destroy()
    res.redirect('/')
}

module.exports = {getAllLists, getCreateList, getList, getCreateTask, getEditTask, postCreateTask, postEditTask, getChangeStatus, deleteTask, postCreateList, deleteList, getEditList, postEditList }