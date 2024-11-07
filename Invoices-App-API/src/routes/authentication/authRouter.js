import { AuthController } from '../../Controllers/auth/authController.js'
import { Router } from 'express'

export const createAuthRouter = ({ authModel }) => {
  const authController = new AuthController({ authModel })
  const authRouter = Router()

  authRouter.post('/login', authController.login)
  authRouter.post('/refresh', authController.refreshToken)
  authRouter.post('/logout', authController.logout)

  return authRouter
}
