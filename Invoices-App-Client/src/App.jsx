import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  const routes = Routes()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className="w-full h-dvh">
          <RouterProvider router={routes} />
        </main>
      </QueryClientProvider>
    </>
  )
}

export default App
