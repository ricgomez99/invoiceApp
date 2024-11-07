import { User } from '../Models/mysql/schemas/schemas.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const authToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token === null) return res.status(400)

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN)
    const userId = decodedToken.userId
    const user = await User.findByPk(userId)

    if (!user) throw new Error('User not found')

    req.userId = userId
    next()
  } catch (error) {
    if (error instanceof Error) {
      return res
        .status(400)
        .json({ message: `Authentication failed, error: ${error}` })
    }
  }
}
