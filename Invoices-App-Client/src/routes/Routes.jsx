import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import PersistLogin from '../hooks/PersistLogin'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import InvoiceDetails from '../pages/InvoiceDetails'

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: (
        <PersistLogin>
          <ProtectedRoutes />
        </PersistLogin>
      ),
      children: [
        {
          path: `/dashboard`,
          element: <Dashboard />,
        },

        {
          path: '/invoice-details/:invoiceId',
          element: <InvoiceDetails />,
        },
      ],
    },
  ])

  return routes
}
