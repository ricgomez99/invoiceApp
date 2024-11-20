import { useQuery } from '@tanstack/react-query'
import { getInvoices } from '../utils/invoices'
import { useAuth } from './useAuth'

export default function useInvoiceQuery() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const { data: invoices = [], isLoading } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['invoices'],
    queryFn: () => getInvoices(authToken),
  })

  return { invoices, isLoading }
}
