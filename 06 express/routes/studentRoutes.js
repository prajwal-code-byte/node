import express from 'express'

const router = express.Router()

router.get( '/', (req, res)=>{
    res.send("Welcome to student management System")
})

router.get('/about', (req,res) =>{
    res.send('About Student Management System')
})

router.get('/students', (req, res) =>{
    res.send("Student List")
})

router.get('/students/:id', (req, res) =>{
    res.send(`Student Id: ${req.params.id}`)
})

export default router