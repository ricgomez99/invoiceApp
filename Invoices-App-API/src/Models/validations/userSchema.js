import { z } from 'zod'

const User = z.object({
  username: z
    .string({
      invalid_type_error: 'username must be a string',
      required_error: 'username is required',
    })
    .min(3),
  email: z
    .string({
      invalid_type_error: 'email must be a valid email',
      required_error: 'email is required',
    })
    .email()
    .min(5),
  password: z
    .string({
      invalid_type_error:
        'invalid password, it should contain at least 2 upper case letters, and 2 numbers',
      required_error: 'password is required',
    })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  role: z.optional(z.enum(['admin', 'client'])),
})

const validateSchema = (object) => {
  return User.safeParse(object)
}

const validatePartialSchema = (object) => {
  return User.partial().safeParse(object)
}

export { validateSchema, validatePartialSchema }
