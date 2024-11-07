import { Router } from 'express'
import { ProductsController } from '../../Controllers/products/productsControlles.js'
import { authToken } from '../../middlewares/authToken.js'

export const createProductsRouter = ({ productsModel }) => {
  const productsRouter = Router()
  const productsController = new ProductsController({ productsModel })

  productsRouter.get('/', authToken, productsController.getProducts)
  productsRouter.get('/:id', authToken, productsController.getProduct)
  productsRouter.post('/', authToken, productsController.createProduct)
  productsRouter.patch('/:id', authToken, productsController.updateProduct)
  productsRouter.delete('/:id', authToken, productsController.deleteProduct)

  return productsRouter
}
