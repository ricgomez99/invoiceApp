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
    'Options',
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
    <section className="w-full flex flex-col gap-6 justify-center items-center">
      <div className="bg-gray-400 py-2 px-6 rounded-lg items-center hidden w-0 lg:w-full  lg:flex lg:flex-row justify-center gap-5">
        {tableHead &&
          tableHead.map((title) => (
            <span
              className="text-white font-lato font-semibold text-base text-center lg:min-w-16"
              key={title}
            >
              {title}
            </span>
          ))}
      </div>
      <aside className="w-full">
        <div className="flex flex-col justify-center items-center gap-3">
          {currentInvoices &&
            currentInvoices.map((invoice) => (
              <InvoiceCard
                id={invoice.id}
                date={invoice.date}
                discount={invoice.discount}
                subtotal={invoice.subtotal}
                total={invoice.total}
                userId={invoice.userId}
                key={invoice.id}
              />
            ))}
        </div>
      </aside>
      {invoices ? (
        <div className="flex justify-center items-center py-3">
          <Pagination
            invoices={invoices.length}
            invoicePerPage={invoicePerPage}
            pageChange={pageChange}
          />
        </div>
      ) : null}
    </section>
  )
})
