const express = require("express")
const koderRouter = require("./routerKoders")
const server = express()


server.use(express.json())
function middleware(request,response,next) {
    console.log("Middleware Externo")
    next()
}
server.use(middleware)

function factoryMiddleware(){
    return (request,response,next) => {
        console.log("Middleware factory")
        next()
    }
}
server.use(factoryMiddleware())
//Middleware a nivel de aplicacion o servidor
server.use((request, response, next) => {
    request.user = "Fer"
    console.log("Middleware a nivel de aplicacion de servidor")
    next()
}, (request, response, next) => {
    console.log("Middleware a nivel de aplicacion de servidor 2")
    next()
})
server.use((request, response, next) => {
    request.user = 'Karen'
    console.log("Middleware a nivel de aplicacion de servidor")
    next()
})
server.get("/", (request, response) => {
    console.log("user: ",request.user)
    response.json({
        message: "Hola Koders"
    })
})

server.use("/koders",koderRouter)
server.listen(8080, () => {
    console.log("Server running")
})

//Un middleware son funciones
//(request, response, next) => {}

// 3 niveles de middleware
// Nivel de aplicacion (server)
// Nivel de router
// Nivel de ruta
