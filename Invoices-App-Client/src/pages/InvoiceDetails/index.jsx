import { useParams } from 'react-router-dom'
import useInvoiceQuery from '../../hooks/useInvoiceQuery'

export default function InvoiceDetails() {
  const { invoiceId } = useParams()
  const { invoices } = useInvoiceQuery()
  const invoice = invoices.find((item) => item.id === invoiceId)
  console.log(invoice)

  return (
    <>
      <div className="text-gray-600">
        <h1>Details</h1>
        {invoice && (
          <div>
            <span>Id: {invoice.id}</span>
            <span>Creation Date: {invoice.date}</span>
            <span>Discount: {invoice.discount}</span>
            <span>Subtotal: {invoice.subtotal}</span>
            <span>Total: {invoice.total}</span>
          </div>
        )}
      </div>
    </>
  )
}
