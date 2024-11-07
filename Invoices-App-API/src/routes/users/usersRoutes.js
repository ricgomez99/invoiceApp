import { Router } from 'express'
import { UsersController } from '../../Controllers/users/usersController.js'

export const createUsersRouter = ({ usersModel }) => {
  const usersRouter = Router()
  const usersController = new UsersController({ usersModel })

  usersRouter.get('/', usersController.getUsers)
  usersRouter.get('/:id', usersController.getUser)
  usersRouter.post('/', usersController.createUser)
  usersRouter.patch('/:id', usersController.updateUser)
  usersRouter.delete('/:id', usersController.deleteUser)

  return usersRouter
}
