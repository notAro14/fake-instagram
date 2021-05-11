import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import postsRoutes from './routes/posts'
import usersRoutes from './routes/users'

dotenv.config()

const isDev = process.env.NODE_ENV === 'development'
const PORT = process.env.PORT || 4001
const app = express()
const CONNECTION_URL = isDev
  ? process.env.MONGO_DB_URI_LOCAL
  : process.env.MONGO_DB_URI

// middlewares
app.use(express.urlencoded({ extended: true, limit: '30mb' }))
app.use(express.json({ limit: '30mb' }))
app.use(cookieParser())

// routes
app.use('/images', express.static(path.join(__dirname, '../../tmp/images')))
app.use('/api/posts', postsRoutes)
app.use('/api/users', usersRoutes)

// serving static files in production
if (!isDev) {
  app.use('/assets', express.static(path.join(__dirname, '../../dist')))
  app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'))
  })
}

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      // eslint-disable-next-line
      console.log(
        `✨ ${
          isDev ? 'API' : 'Project'
        } is running at http://localhost:${PORT}/`
      )
    )
  })
  // eslint-disable-next-line
  .catch((error) => console.error(error))

mongoose.set('useFindAndModify', false)
