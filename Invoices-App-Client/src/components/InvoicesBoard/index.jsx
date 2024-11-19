import Pagination from '../Pagination'
import { useState, memo } from 'react'
import InvoiceCard from '../InvoiceCard'
import useInvoiceQuery from '../../hooks/useInvoiceQuery'

export default memo(function InvoicesBoard() {
  const tableHead = [
    'Invoice',
    'Client',
    'Date',
    'Subtotal',
    'Discount',
    'Total',
  ]
  const { invoices } = useInvoiceQuery()
  const [currentPage, setCurrentPage] = useState(1)

  // eslint-disable-next-line no-unused-vars
  const [invoicePerPage, setInvoicePerPage] = useState(5)
  const lastInvoiceIdx = currentPage * invoicePerPage
  const firstInvoiceIdx = lastInvoiceIdx - invoicePerPage
  const currentInvoices =
    invoices && invoices.slice(firstInvoiceIdx, lastInvoiceIdx)
  const pageChange = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <section className="w-full flex flex-col gap-6">
      <div className="bg-[#25252544] w-full py-3 px-6 rounded-lg items-center flex flex-row justify-between">
        {tableHead &&
          tableHead.map((title) => (
            <span
              className="text-white font-semibold text-lg text-center min-w-16"
              key={title}
            >
              {title}
            </span>
          ))}
      </div>
      <aside>
        <div className="flex flex-col justify-center gap-3">
          {currentInvoices
            ? currentInvoices.map((invoice) => (
                <InvoiceCard
                  id={invoice.id}
                  date={invoice.date}
                  discount={invoice.discount}
                  subtotal={invoice.subtotal}
                  total={invoice.total}
                  userId={invoice.userId}
                  key={invoice.id}
                />
              ))
            : null}
        </div>
        {invoices ? (
          <div className="flex justify-center items-center py-5">
            <Pagination
              invoices={invoices.length}
              invoicePerPage={invoicePerPage}
              pageChange={pageChange}
            />
          </div>
        ) : null}
      </aside>
    </section>
  )
})
