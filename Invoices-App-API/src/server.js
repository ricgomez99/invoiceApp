import { createApp } from './app.js'
import { UsersModel } from './Models/mysql/users/usersModel.js'
import { ProductsModel } from './Models/mysql/products/productsModel.js'
import { InvoicesModel } from './Models/mysql/invoices/invoicesModel.js'
import { AuthModel } from './Models/auth/authModel.js'

createApp({
  usersModel: UsersModel,
  productsModel: ProductsModel,
  invoicesModel: InvoicesModel,
  authModel: AuthModel,
})
