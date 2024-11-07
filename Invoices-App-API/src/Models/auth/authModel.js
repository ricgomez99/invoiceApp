import { User, Token } from '../mysql/schemas/schemas.js'
import { comparePassword } from './../../utils/comparePassword.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export class AuthModel {
  static async login({ input }) {
    try {
      const { email, password } = input
      const user = await User.findOne({
        where: {
          email: email,
        },
      })
      const passwordMatch = await comparePassword(password, user?.password)
      if (!user || !passwordMatch) return null

      return user
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async logout(token) {
    try {
      if (!token) return null
      const deletedToken = await Token.destroy({
        where: {
          refresh: token,
        },
      })

      return deletedToken
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async refreshToken(refreshToken) {
    try {
      if (!refreshToken) return null
      const token = await Token.findOne({
        where: {
          refresh: refreshToken,
        },
      })

      const { refresh } = token
      const decodedToken = jwt.verify(refresh, process.env.REFRESH_TOKEN)
      const userId = decodedToken.userId

      return userId
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async createNewToken({ refresh }) {
    try {
      const newAccessToken = await Token.create({ refresh })
      if (!newAccessToken) return null

      return newAccessToken
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
