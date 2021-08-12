//Definicion de nuestro servidor


const  express = require("express")
const kodersRouter = require("./routers/koders")

const server = express()

server.use("/koders",kodersRouter)
//middlewars

//agregar routers

module.exports = server
