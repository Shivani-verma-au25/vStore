import express from 'express'
dotenv.config()
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin : process.env.CORS_URL,
      credentials: true 
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


// import routes
import userRouter from './routes/user.router.js'
import categoryRouter from './routes/category.routes.js'
import productRouter from './routes/products.route.js'

app.use('/api/v1/user', userRouter)
app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/product', productRouter)


export {app}