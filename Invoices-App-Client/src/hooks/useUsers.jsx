import { getUsers } from '../utils/users'
import { useQuery } from '@tanstack/react-query'

export default function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })

  return { users, isLoading }
}
