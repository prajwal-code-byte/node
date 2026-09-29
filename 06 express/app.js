import express from 'express'
import studentRoutes from './routes/studentRoutes.js'

const app = express();

app.use('/', studentRoutes)

app.listen(3000, ()=>{
    console.log("Server is Running on port 3000");
    
})

