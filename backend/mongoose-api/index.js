const express = require("express")
const server =  express()
server.get("/",(request,response)=>{
    response.json({
        messages: "API with mongoose"
    })
})

server.listen(8080,()=>{
    console.log("Server Listening")
})
