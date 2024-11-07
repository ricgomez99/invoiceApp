import cors from 'cors'

const ORIGINS = [
  'http://localhost:5173/',
  'http://localhost:5173',
  'http://localhost:80',
  'http://localhost:80/',
  'http://localhost',
  'http://localhost/',
  'http://localhost:3000/auth/login',
]

export const corsMiddleware = ({ acceptOrigin = ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptOrigin.indexOf(origin) !== -1 || !origin) {
        return callback(null, true)
      } else {
        return callback(new Error('Not allowed by CORS'))
      }
    },
  })
