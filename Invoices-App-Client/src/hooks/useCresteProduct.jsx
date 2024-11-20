import { createProduct } from '../utils/products'
import { useAuth } from './useAuth'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useCreateProduct() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()
  const queryClient = useQueryClient()

  const { mutateAsync: addProduct } = useMutation({
    mutationFn: async (data) => await createProduct({ data, authToken }),
    onSuccess: () => queryClient.invalidateQueries(['products']),
  })

  return { addProduct }
}
