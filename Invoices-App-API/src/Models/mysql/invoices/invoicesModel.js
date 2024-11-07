import { Invoice, Product, User } from '../schemas/schemas.js'

export class InvoicesModel {
  static async getInvoices(userId) {
    try {
      const invoices = await Invoice.findAll({
        where: {
          userId: userId,
        },
        include: [Product],
      })
      if (!invoices) return null

      return invoices
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getInvoiceById(id) {
    try {
      const invoice = await Invoice.findByPk(id, { include: [Product] })
      if (!invoice) return null

      return invoice
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async createInvoice({ userId, invoiceData, productIds }) {
    try {
      const invoice = await Invoice.create({ ...invoiceData, userId: userId })
      if (!invoice) return null
      if (productIds && productIds.length > 0) {
        await invoice.addProducts(productIds)
      }

      return invoice
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async updateInvoice({ id, inputData }) {
    try {
      const updatedInvoice = await Invoice.update(inputData, {
        where: {
          id: id,
        },
      })

      if (updatedInvoice) return updatedInvoice

      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async deleteInvoice(id) {
    try {
      const deletedInvoice = await Invoice.destroy({
        where: {
          id: id,
        },
      })

      if (deletedInvoice) return true

      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
