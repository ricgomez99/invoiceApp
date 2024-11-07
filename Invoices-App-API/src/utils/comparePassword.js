import bcrypt from 'bcrypt'

export const comparePassword = async (requestPassword, userPassword) => {
  return await bcrypt.compare(requestPassword, userPassword)
}
