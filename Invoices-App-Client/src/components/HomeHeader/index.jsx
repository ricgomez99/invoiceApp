import { Button } from '@material-tailwind/react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeHeader() {
  const goTo = useNavigate()
  const handleClick = useCallback(() => goTo('/login'), [goTo])

  return (
    <nav className="w-full bg-transparent flex flex-col py-4">
      <div className="w-full max-w-[1366px] flex flex-row justify-between items-center self-center">
        <img
          src={'public/app-logo.svg'}
          alt="invoices app logo"
          className="w-16"
        />
        <Button onClick={handleClick} className="font-lato font-semibold">
          Login
        </Button>
      </div>
    </nav>
  )
}
