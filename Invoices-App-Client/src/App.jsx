import './App.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  const routes = Routes()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex w-[100%] h-[100%] justify-center align-middle">
          <RouterProvider router={routes} />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
