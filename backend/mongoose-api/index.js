const express = require("express")
const mongoose = require("mongoose")
const Koder = require("./kodersModel")
const DB_USER = 'alfred'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-12va.dwrb1.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
const server =  express()

server.get("/",(request,response)=>{
    response.json({
        messages: "API with mongoose"
    })
})
server.get("/koders",async (request,response)=>{
    const koders = await Koder.find()
    response.json({
        succes: true,
        messages: "all koders of DB",
        data: {
            koders
        }
    })
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async (connection) => {
    console.log('DB Connected')
    server.listen(8080,()=>{
        console.log("Server Listening")
    })
}).catch(err => {
    console.log('Error: ', err)
})

