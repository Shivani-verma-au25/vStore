import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(cors({
    origin : process.env.CORS_URL,
      credentials: true 
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


// import routes
import UserRouter from './routes/user.router.js'
import AuthRouter from './routes/auth.routes.js'

app.use('/api/v1/user',UserRouter)
app.use('/api/v1/user',AuthRouter)



export {app}