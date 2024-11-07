import {
  validateSchema,
  validatePartialSchema,
} from '../../Models/validations/userSchema.js'

export class UsersController {
  constructor({ usersModel }) {
    this.usersModel = usersModel
  }

  getUsers = async (req, res) => {
    const users = await this.usersModel.getUsers()
    if (!users) {
      return res
        .status(400)
        .json({ message: 'Bad Request, unable to find users' })
    }

    return res.status(200).json(users)
  }

  getUser = async (req, res) => {
    const { id } = req.params
    const user = await this.usersModel.getUserById(id)

    if (!user) {
      return res.status(400).json({ message: 'Not user found' })
    }

    return res.status(200).json(user)
  }

  createUser = async (req, res) => {
    const data = req.body
    const result = validateSchema(data)

    const userCreated = await this.usersModel.createUser({
      userData: result.data,
    })

    if (userCreated) {
      return res.status(202).json({ message: 'User created!' })
    }

    return res.status(400).json({ message: 'Unable to create user' })
  }

  updateUser = async (req, res) => {
    const { id } = req.params
    const validation = validatePartialSchema(req.body)
    const userData = validation.data

    const updatedUser = await this.usersModel.updateUser({ id, userData })
    if (!updatedUser) {
      return res.status(400).json({ messgae: 'Unable to update User Data' })
    }

    return res.status(202).json({ messgae: 'User updated!' })
  }

  deleteUser = async (req, res) => {
    const { id } = req.params
    const deletedUser = await this.usersModel.deleteUser(id)
    if (!deletedUser) {
      return res.status(400).json({ message: 'Unable to Delete User' })
    }

    return res.status(202).json({ messgae: 'User Deleted' })
  }
}
