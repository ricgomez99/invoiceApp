import useUsers from '../../hooks/useUsers'
import { useState, useCallback } from 'react'
import { Typography } from '@material-tailwind/react'
import { ImFileText } from 'react-icons/im'
import { MdDeleteForever } from 'react-icons/md'
import { FaListUl } from 'react-icons/fa'
import ProductsModal from './../Modals/PorductsModal/index'
import VoucherModal from '../Modals/VoucherModal'
import useDeleteInvoice from '../../hooks/useDeleteInvoice'
import ConfirmationModal from '../Modals/Confirmation'

export default function Invoice({ ...props }) {
  const [showProducts, setShowProducts] = useState(false)
  const [showVoucher, setShowVoucher] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const deleteInvoice = useDeleteInvoice()
  const invoiceId = props.id.replaceAll('-', ' ').split(' ')[0]
  const date = props.date.replaceAll('-', '/').split('T')[0]
  const users = useUsers()
  const user = users?.find((element) => element.id === props.userId)

  const classes = 'p-4 border-b border-gray-300'
  const displayProducts = () => {
    setShowProducts(!showProducts)
  }

  const displayVoucher = () => {
    setShowVoucher(!showVoucher)
  }

  const displayConfirm = () => {
    setShowConfirm(!showConfirm)
  }

  const handleDelete = useCallback(() => {
    displayConfirm()
  }, [])

  return (
    <>
      <td className={classes}>
        <Typography variant="small" color="black">
          {invoiceId}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="black">
          <>{user && user.name}</>
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="black">
          {date}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="black">
          {props.subtotal}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="black">
          {`${props.discount}%`}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="black">
          {props.total}
        </Typography>
      </td>
      <td className={classes}>
        <ImFileText className="cursor-pointer" onClick={displayVoucher} />
      </td>
      <td className={classes}>
        <FaListUl className="cursor-pointer" onClick={displayProducts} />
      </td>
      <td className={classes}>
        <div className="flex flex-row w-full h-full justify-center gap-2">
          <MdDeleteForever
            onClick={handleDelete}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </td>
      {showProducts ? (
        <ProductsModal
          open={showProducts}
          handler={displayProducts}
          products={props?.products}
        />
      ) : null}
      {showVoucher ? (
        <VoucherModal
          open={showVoucher}
          handler={displayVoucher}
          image={props?.image}
          invoiceId={props.id}
        />
      ) : null}
      {showConfirm ? (
        <ConfirmationModal
          title="delete"
          callBack={deleteInvoice}
          open={displayConfirm}
          id={props.id}
        />
      ) : null}
    </>
  )
}
