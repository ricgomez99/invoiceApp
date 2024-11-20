import { useAuth } from './useAuth'
import { getProducts } from '../utils/products'
import { useQuery } from '@tanstack/react-query'

export default function useProducts() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const { data: products = [], isLoading } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['products'],
    queryFn: () => getProducts(authToken),
  })

  return { products, isLoading }
}
