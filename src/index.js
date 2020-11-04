import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import { dbUrl, port } from './utils/config'

// routes
import apiRouter from './routes'

const app = express()

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})

const db = mongoose.connection
db.on('error', console.log)
db.once('open', () => console.log('DB connection successful'))

app.disable('x-powered-by')
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api/v1', apiRouter)

app.get('/anonymously', (req, res) => res.json('we are here😎'))

app.listen(port, () => console.log(`app is running on port ${port}`))
