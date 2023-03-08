import express, { Router } from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'

const app = express();
import connectDB from './DB/connect.js';
// midllewares
import notFoundMiddleware from './middlewares/not-foundMidlleware.js';
import errorHandlerMiddleware from './middlewares/errorHandler-middleware.js';
import router from './Routes/authRoutes.js';

app.use(express.json())

app.get('/', (req ,res)=>{
    res.send('server side')
})

// app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/v1/auth", router)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 8000
const start = async ()=>{
    try {
        await connectDB(process.env.DB_URL, process.env.DB_PASSWORD)
        console.log('connecting to mongoDB DATABASE...')
        app.listen(port, ()=> console.log(`server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    
    }
  
}

start()