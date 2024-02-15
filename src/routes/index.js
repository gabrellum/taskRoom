const { Router } = require('express');
const usersRouter = require('./users.routes');
const tasksRouter = require('./tasks.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/tasks', tasksRouter)

module.exports = routes;