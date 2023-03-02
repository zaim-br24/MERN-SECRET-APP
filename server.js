import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
import connectDB from './DB/connect.js';
// midllewares
import notFoundMiddleware from './middlewares/not-foundMidlleware.js';
import errorMiddleware from './middlewares/error-middleware.js';


app.get('/', (req ,res)=>{
    res.send('server side')
})


app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 8000
const start = async ()=>{
    try {
        await connectDB(process.env.DB_URL, process.env.DB_PASSWORD)
        console.log('connected to mongoDB successfully...')
        app.listen(port, ()=> console.log(`server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
  
}

start()