import { useAuth } from './useAuth'
import { deleteInvoice } from '../utils/invoices'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteInvoice() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()
  const queryClient = useQueryClient()

  const { mutateAsync: deleteElement } = useMutation({
    mutationFn: async (id) => {
      return await deleteInvoice({ id, authToken })
    },

    onSuccess: () => queryClient.invalidateQueries(['invoices']),
  })

  return { deleteElement }
}
