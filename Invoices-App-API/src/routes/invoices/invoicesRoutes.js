import { InvoicesController } from '../../Controllers/invoices/invoicesController.js'
import { Router } from 'express'
import { authToken } from './../../middlewares/authToken.js'

export const createInvoicesRouter = ({ invoicesModel }) => {
  const invoicesController = new InvoicesController({ invoicesModel })
  const invoicesRouter = Router()

  invoicesRouter.get('/', authToken, invoicesController.getInvoices)
  invoicesRouter.get('/:id', authToken, invoicesController.getInvoice)
  invoicesRouter.post('/', authToken, invoicesController.createInvoice)
  invoicesRouter.patch('/:id', authToken, invoicesController.updateInvoice)
  invoicesRouter.delete('/:id', authToken, invoicesController.deleteInvoice)

  return invoicesRouter
}
