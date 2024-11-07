import { Product } from '../schemas/schemas.js'

export class ProductsModel {
  static async getProducts() {
    try {
      const products = await Product.findAll()
      if (!products) return null

      return products
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async getProductById(id) {
    try {
      const product = await Product.findByPk(id)
      if (!product) return null

      return product
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async createProduct({ productData }) {
    try {
      const product = await Product.create(productData)
      if (!product) return null

      return product
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async updateProduct({ id, inputData }) {
    try {
      if (!id || !inputData) return null
      const newData = await Product.update(inputData, {
        where: {
          id: id,
        },
      })

      return newData
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  static async deleteProduct(id) {
    try {
      const deletedProduct = await Product.destroy({
        where: {
          id: id,
        },
      })

      if (!deletedProduct) return null

      return true
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
}
