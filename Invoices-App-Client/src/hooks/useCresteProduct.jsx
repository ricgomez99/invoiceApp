import { createProduct } from '../utils/products'
import { useAuth } from './useAuth'

export default function useCreateProduct() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const create = async (data) => {
    try {
      await createProduct({ data, authToken })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
  return create
}
