const http = require('http')

const server = http.createServer((req, res) =>{
    res.write("Hello From Node, Node js Server is Running")
    res.end()
})

server.listen(3000, () =>{
    console.log("Node Js Server is Running on port http://localhost:3000");
    
})