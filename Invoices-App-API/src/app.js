import express, { json } from 'express'
import { sequelizeConnection } from './Models/mysql/db/connection.js'
import { createUsersRouter } from './routes/users/usersRoutes.js'
import { createProductsRouter } from './routes/products/productsRoutes.js'
import { createInvoicesRouter } from './routes/invoices/invoicesRoutes.js'
import { createAuthRouter } from './routes/authentication/authRouter.js'
import 'dotenv/config'
import { corsMiddleware } from './middlewares/corsMiddleware.js'

const app = express()
const port = process.env.PORT ?? 3000

const testConnection = async () => {
  try {
    await sequelizeConnection.authenticate()
    await sequelizeConnection.sync({ alter: true })
    console.log('Database connected successfully')
  } catch (error) {
    console.log(`Unable to stablish connection, ${error}`)
  }
}

export const createApp = async ({
  usersModel,
  productsModel,
  invoicesModel,
  authModel,
}) => {
  await testConnection()
  app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
  })

  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')
  app.options('*')

  app.use('/users', createUsersRouter({ usersModel }))
  app.use('/products', createProductsRouter({ productsModel }))
  app.use('/invoices', createInvoicesRouter({ invoicesModel }))
  app.use('/auth', createAuthRouter({ authModel }))
  // app.use('/token', createRefreshAuthRouter({ authModel }))

  app.listen(port, () => {
    console.log(`App running on port: http://localhost:${port}`)
  })

  return app
}
