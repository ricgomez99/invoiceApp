import { createInvoice } from '../utils/invoices'
import { useAuth } from './useAuth'

export default function useCreateInvoice() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const create = async (invoiceData) => {
    try {
      await createInvoice({ authToken, invoiceData })
    } catch (error) {
      if (error instanceof Error) {
        console.table([error.message, error, error.name])
      }
    }
  }

  return create
}
