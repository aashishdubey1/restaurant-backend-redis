import express from 'express'
import serverConfig from './config/server.config'
import apiRouter from './routes'
import { errorHandler } from './middlewares/errorHandler'

const app = express()
app.use(express.json())

app.use('/api',apiRouter)


app.use(errorHandler);

app.listen(serverConfig.PORT,()=>{
    console.log("Server is Running on port ",serverConfig.PORT)
}).on("error",(error)=>{
    throw new Error(error.message)
})