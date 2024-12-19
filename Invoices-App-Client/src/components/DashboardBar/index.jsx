import { Typography } from '@material-tailwind/react'
import BurguerMenu from '../BurguerMenu'

export default function DashboardBar() {
  return (
    <nav className="bg-transparent w-full justify-center items-center flex flex-col p-4">
      <div className="flex flex-row w-full max-w-7xl justify-between items-center">
        <Typography
          variant="h3"
          color="black"
          className="font-lato font-semibold"
        >
          Dashboard
        </Typography>
        <BurguerMenu />
      </div>
    </nav>
  )
}
