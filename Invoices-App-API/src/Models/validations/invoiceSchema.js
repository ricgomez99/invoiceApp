import { z } from 'zod'

const Invoice = z.object({
  subtotal: z
    .number({
      invalid_type_error: 'subtotal must be a number',
      required_error: 'subtotal is required',
    })
    .min(0),
  imageUrl: z.optional(z.string()),
  discount: z
    .number({
      invalid_type_error: 'discount must be a number',
      required_error: 'discount is required',
    })
    .min(0)
    .max(50),
  total: z
    .number({
      invalid_type_error: 'discount must be a number',
      required_error: 'discount is required',
    })
    .min(0),
})

const validateInvoiceSchema = (object) => {
  return Invoice.safeParse(object)
}

const validatePartialInvoiceSchema = (object) => {
  return Invoice.partial().safeParse(object)
}

export { validateInvoiceSchema, validatePartialInvoiceSchema }
