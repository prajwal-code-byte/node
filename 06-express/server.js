import express from 'express'

const app = express()

app.get('/', () =>{})
app.get('/about', () =>{})
app.get('/contact', () =>{})

app.listen(3000, () =>{
    console.log("Hello From Server");
    
})