import bcrypt from 'bcrypt'

export const saltGenerator = async (password) => {
  return await bcrypt.hash(password, 10)
}
