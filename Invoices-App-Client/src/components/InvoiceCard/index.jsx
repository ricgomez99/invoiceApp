import { Card, CardBody } from '@material-tailwind/react'
import { memo } from 'react'
import useUsers from '../../hooks/useUsers'

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
  const spanStyles = 'font-semibold text-sm text-[#1E201E] min-w-16'

  const users = useUsers()
  const user = users && users.find((user) => user.id === userId)
  return (
    <>
      <Card className="w-full rounded-xl bg-[#2e4a5d] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-1 border-gray-300">
        <CardBody className="w-full items-center flex flex-row justify-between text-center">
          <span className={spanStyles}>{invoiceId}</span>
          <span className={spanStyles}>{user?.name}</span>
          <span className={spanStyles}>{dateFormated}</span>
          <span className={spanStyles}>{subtotal}</span>
          <span className={spanStyles}>{discount}</span>
          <span className={spanStyles}>{total}</span>
        </CardBody>
      </Card>
    </>
  )
})
