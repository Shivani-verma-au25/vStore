import express from 'express'
dotenv.config()
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

// app.use(cors({
//     origin:process.env.CORS_URL 
// }))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


// import routes
import userRouter from './routes/user.router.js'

app.use('/api/v1/user',userRouter)


export {app}