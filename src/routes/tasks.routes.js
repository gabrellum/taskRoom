const { Router } = require('express') 
const TasksController = require('../controllers/TasksController')

const tasksRouter = Router()

const tasksController = new TasksController

tasksRouter.post('/:user_id', tasksController.create)
tasksRouter.get('/', tasksController.listTasks)
tasksRouter.delete('/:id', tasksController.deleteTasks)
tasksRouter.put('/:id', tasksController.updateTasks)
tasksRouter.put('/:id', tasksController.checkstatus)

module.exports = tasksRouter

