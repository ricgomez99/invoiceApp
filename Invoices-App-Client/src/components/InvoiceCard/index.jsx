import { memo, useCallback } from 'react'
import useUsers from '../../hooks/useUsers'
import { useNavigate } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'
import useDeleteInvoice from '../../hooks/useDeleteInvoice'

export default memo(function InvoiceCard({
  id,
  date,
  subtotal,
  discount,
  total,
  userId,
}) {
  const invoiceId = id?.replaceAll('-', ' ').split(' ')[0]
  const dateFormated = date?.replaceAll('-', '/').split('T')[0]
  const spanStyles = 'font-lato font-semibold text-sm text-[#1E201E] min-w-16'
  const goTo = useNavigate()
  const { deleteElement } = useDeleteInvoice()

  const { users } = useUsers()
  const user = users && users.find((user) => user.id === userId)

  const handleInvoiceDetail = (id) => goTo(`/invoice-details/${id}`)
  const handleInvoiceDelete = useCallback(
    (id) => deleteElement(id),
    [deleteElement]
  )

  return (
    <>
      <div className="w-full rounded-lg py-2 px-6 bg-blue-gray-400/30 border-1 border-gray-300">
        <div className="w-full items-center flex flex-row justify-center gap-5 text-center">
          <span onClick={() => handleInvoiceDetail(id)} className={spanStyles}>
            {invoiceId}
          </span>
          <span className={spanStyles}>{user?.name}</span>
          <span className={spanStyles}>{dateFormated}</span>
          <span className={spanStyles}>{subtotal}</span>
          <span className={spanStyles}>{discount}</span>
          <span className={spanStyles}>{total}</span>
          <FaEdit />
          <FaTrash onClick={() => handleInvoiceDelete(id)} />
        </div>
      </div>
    </>
  )
})
