import { Button } from '@material-tailwind/react'
import { GrAdd } from 'react-icons/gr'

export default function InvoiceButton({ onClick, children }) {
  return (
    <Button
      size="lg"
      className="my-3 self-start flex items-center gap-3 cursor-pointer"
      onClick={onClick}
    >
      {children}
      <GrAdd color="#fff" className="w-4 h-4" />
    </Button>
  )
}
