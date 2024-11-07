import { Sequelize } from 'sequelize'
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_URL,
  DB_USER,
} from './config.js'

export const sequelizeConnection = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    username: DB_USER,
  }
)
