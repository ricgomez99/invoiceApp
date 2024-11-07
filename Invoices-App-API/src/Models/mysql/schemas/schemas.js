import { DataTypes, ENUM } from 'sequelize'
import { sequelizeConnection } from '../db/connection.js'
import crypto from 'node:crypto'

const date = new Date().toISOString()

export const User = sequelizeConnection.define(
  'user',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => crypto.randomUUID(),
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 5,
        max: 12,
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    role: {
      type: ENUM,
      allowNull: false,
      values: ['admin', 'client'],
      defaultValue: 'client',
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'User',
  }
)

export const Invoice = sequelizeConnection.define(
  'invoice',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: () => crypto.randomUUID(),
    },

    date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: date,
    },

    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },

    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'Invoice',
  }
)

export const Product = sequelizeConnection.define(
  'product',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: () => crypto.randomUUID(),
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'Product',
    timestamps: false,
  }
)

export const Token = sequelizeConnection.define(
  'token',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: () => crypto.randomUUID(),
    },

    refresh: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
)

const InvoiceProduct = sequelizeConnection.define(
  'InvoiceProduct',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true,
      defaultValue: () => crypto.randomUUID(),
    },
  },
  {
    timestamps: false,
  }
)

User.hasMany(Invoice)
Invoice.belongsTo(User)
Invoice.belongsToMany(Product, { through: InvoiceProduct })
Product.belongsToMany(Invoice, { through: InvoiceProduct })
