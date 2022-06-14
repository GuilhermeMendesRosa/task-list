const express = require('express')
const router = express.Router();
const tasksController = require('../middlewares/tasksController')
const methodOverride = require("method-override")

router.use(methodOverride('_method'));

router.get('/', tasksController.getAllLists)
router.get('/createlist', tasksController.getCreateList);
router.get('/list/:id_list', tasksController.getList);
router.get('/createtask/:id_list', tasksController.getCreateTask);
router.get('/edittask/:id_list/:id_task', tasksController.getEditTask);
router.get('/editlist/:id_list', tasksController.getEditList);
router.get('/status/:id_list/:id_task', tasksController.getChangeStatus);

router.post('/createtask/:id_list', express.urlencoded({ extended: true }), tasksController.postCreateTask);
router.post('/edittask/:id_list/:id_task', express.urlencoded({ extended: true }), tasksController.postEditTask);
router.post('/editlist/:id_list', express.urlencoded({ extended: true }), tasksController.postEditList);
router.post('/createlist', express.urlencoded({ extended: true }), tasksController.postCreateList);

router.delete('/deletetask/:id_list/:id_task', tasksController.deleteTask);
router.delete('/deletelist/:id_list', tasksController.deleteList);

module.exports = router