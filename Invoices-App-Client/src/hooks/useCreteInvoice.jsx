import { createInvoice } from '../utils/invoices'
import { useAuth } from './useAuth'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useCreateInvoice() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()
  const queryClient = useQueryClient()

  const { mutateAsync: addInvoice } = useMutation({
    mutationFn: async (invoiceData) =>
      await createInvoice({ authToken, invoiceData }),
    onSuccess: () => queryClient.invalidateQueries(['invoices']),
  })

  return { addInvoice }
}
