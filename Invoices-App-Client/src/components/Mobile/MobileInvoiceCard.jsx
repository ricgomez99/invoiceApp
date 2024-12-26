import { BiChevronDown } from 'react-icons/bi'
import { useState, useCallback } from 'react'
import MobileInvoiceDetails from './MobileInvoiceDetails'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'

export default function MobileInvoiceCard({
  id,
  date,
  discount,
  subtotal,
  total,
  userId,
}) {
  const [showDetails, setShowDetails] = useState(false)
  const handleOpenDetails = useCallback(() => {
    setShowDetails((prev) => !prev)
  }, [])

  return (
    <article className="w-full p-3 bg-blue-gray-50 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <span>ID: {id}</span>
        <BiChevronDown
          className={`${
            showDetails && 'rotate-180'
          } transition-all duration-300 ease-in-out`}
          onClick={handleOpenDetails}
        />
      </div>
      <div
        className={`${
          showDetails
            ? 'flex flex-row justify-between opacity-100 pt-2'
            : 'overflow-hidden w-0 h-0 opacity-0 translate-y-[-10px]'
        } transition-all duration-500 ease-in-out`}
      >
        <MobileInvoiceDetails>
          <span>Date: {date}</span>
          <span>Discount: {discount}</span>
        </MobileInvoiceDetails>

        <MobileInvoiceDetails>
          <span>Subtotal: {subtotal}</span>
          <span>Total: {total}</span>
        </MobileInvoiceDetails>

        <div className="flex flex-row items-end gap-1">
          <FaEdit />
          <FaTrash />
        </div>
      </div>
    </article>
  )
}
