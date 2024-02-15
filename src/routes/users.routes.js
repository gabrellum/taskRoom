const {Router} = require('express')
const UsersController = require('../controllers/UsersController')


const usersRouter = Router()
const usersController = new UsersController()


 usersRouter.post('/', usersController.create )
 usersRouter.get('/', usersController.listUsers)
 usersRouter.delete('/:id', usersController.deleteUser)
 usersRouter.put('/:id', usersController.updateUser)

 module.exports = usersRouter