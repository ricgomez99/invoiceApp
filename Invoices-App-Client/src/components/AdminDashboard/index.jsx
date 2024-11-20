import InvoicesBoard from './../InvoicesBoard/index'
import { useState, useCallback } from 'react'
import AddInvoice from '../Modals/AddInvoice'
import useProducts from './../../hooks/useProducts'
import useUsers from '../../hooks/useUsers'
import { CreateProductsModal } from '../Modals/CreateProductsModal/index'
import InvoiceButton from '../InvoiceButton/InvoiceButton'

export default function AdminDashboard() {
  const [open, setIsOpen] = useState(false)
  const [openProductsForm, setOpenProductsForm] = useState(false)
  const handleOpenForm = useCallback(() => setIsOpen(!open), [open])
  const handleOpenProductForm = useCallback(
    () => setOpenProductsForm(!openProductsForm),
    [openProductsForm]
  )
  const { users } = useUsers()
  const { products } = useProducts()

  return (
    <>
      <div className="w-full bg-[#F5F5F5] p-6 rounded-lg max-w-[1366px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-start pb-3">
          <div className="flex flex-row justify-center gap-6">
            <InvoiceButton onClick={handleOpenForm}>
              Create invoice
            </InvoiceButton>
            <InvoiceButton onClick={handleOpenProductForm}>
              Create product
            </InvoiceButton>
          </div>
        </div>
        <InvoicesBoard />
      </div>
      {open && (
        <AddInvoice
          open={open}
          handler={handleOpenForm}
          products={products}
          users={users}
        />
      )}
      {openProductsForm && (
        <CreateProductsModal
          open={openProductsForm}
          handler={handleOpenProductForm}
        />
      )}
    </>
  )
}
