import { tokenGenerator } from './tokenGenerator.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const jwtTokens = ({ user }) => {
  const accessToken = tokenGenerator({ userId: user.id })
  const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN)

  return { accessToken, refreshToken }
}
