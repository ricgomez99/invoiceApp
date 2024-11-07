import {
  validateProductSchema,
  validatePartialProductSchema,
} from '../../Models/validations/productSchema.js'

export class ProductsController {
  constructor({ productsModel }) {
    this.productsModel = productsModel
  }

  getProducts = async (req, res) => {
    const products = await this.productsModel.getProducts()
    if (products) {
      return res.status(200).json(products)
    }

    return res.status(400).json({ message: 'Unable to find products' })
  }

  getProduct = async (req, res) => {
    const { id } = req.params
    const product = await this.productsModel.getProductById(id)
    if (!product) {
      return res.status(400).json({ message: 'Product not found' })
    }

    return res.status(200).json(product)
  }

  createProduct = async (req, res) => {
    const result = validateProductSchema(req.body)
    const productData = result.data

    const newProduct = await this.productsModel.createProduct({
      productData,
    })
    if (!newProduct) {
      return res.status(400).json({ message: 'Unable to create product' })
    }

    return res.status(202).json({ messgae: 'Product created!' })
  }

  updateProduct = async (req, res) => {
    const result = validatePartialProductSchema(req.body)
    const inputData = result.data
    const { id } = req.params
    const updatedProduct = await this.productsModel.updateProduct({
      id,
      inputData,
    })
    if (!updatedProduct) {
      return res
        .status(400)
        .json({ messgae: 'Error while updating product info' })
    }

    return res.status(202).json({ message: 'Product updated successfully!' })
  }

  deleteProduct = async (req, res) => {
    const { id } = req.params
    const deletedProduct = await this.productsModel.deleteProduct(id)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Unable to delete product' })
    }

    return res.status(202).json({ message: 'Product Deleted!' })
  }
}
