import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'

const app= express()

app.disable('x-powered-by')
app.use(express.json())
app.use(morgan('dev'));
app.use(cors())

const port = 3030

app.get('/anonymously',(req,res) => res.json('we are here😎'))

app.listen(port,()=>console.log(`app is running on port ${port}`))