import express from 'express'
import studentsRoutes from './routes/studentsRoutes.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', studentsRoutes)

app.listen(3000, () =>{
    console.log('Server is Running on port 3000');
    
})