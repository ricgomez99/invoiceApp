import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export default function Navbar() {
  const goTo = useNavigate()
  const handleClick = useCallback(() => goTo('/'), [goTo])

  return (
    <nav className="w-full bg-transparent flex flex-col py-4">
      <div className="w-full max-w-[1366px] flex flex-row justify-between items-center self-center">
        <img
          src={'/app-logo.svg'}
          alt="invoices app logo"
          className="w-16 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </nav>
  )
}
