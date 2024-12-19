import AdminDashboard from '../../components/AdminDashboard/index'
import ClientDashboard from './../../components/ClientDashboard/index'
import { useAuth } from '../../hooks/useAuth'
import DashboardBar from '../../components/DashboardBar'

export default function Dashboard() {
  const { getUserRole } = useAuth()
  const userRole = getUserRole()
  return (
    <section className="flex flex-col w-full">
      <DashboardBar />
      <div className="flex flex-col w-full justify-center items-center lg:mt-10">
        {userRole === 'admin' ? <AdminDashboard /> : <ClientDashboard />}
      </div>
    </section>
  )
}
