import { updateProduct } from '../utils/products'
import { useAuth } from './useAuth'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useUpdateProduct() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()
  const queryClient = useQueryClient()

  const { mutateAsync: updateProducts } = useMutation({
    mutationFn: async (updateQuery) => {
      const { id, quantity } = updateQuery
      return await updateProduct({ authToken, id, quantity })
    },

    onSuccess: () => queryClient.invalidateQueries(['products']),
  })

  return { updateProducts }
}
