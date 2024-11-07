import { z } from 'zod'

const Product = z.object({
  quantity: z
    .number({
      invalid_type_error: 'quantity must be a number',
      required_error: 'quantity is required',
    })
    .nonnegative()
    .min(0),
  productName: z
    .string({
      invalid_type_error: 'product name must be a string',
      required_error: 'product name is required',
    })
    .min(5),
})

const validateProductSchema = (object) => {
  return Product.safeParse(object)
}

const validatePartialProductSchema = (object) => {
  return Product.partial().safeParse(object)
}

export { validateProductSchema, validatePartialProductSchema }
