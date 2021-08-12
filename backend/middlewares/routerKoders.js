const express = require("express")
const router = express.Router()

router.use((request,response,next)=>{
    console.log("Middleware en el router de koders");
    next();
})
router.get("/", (request,response,next)=>{
    console.log("Middleware a la ruta GET /koders")
    next()
},(request, response) => {
    response.json({
        message: "Hola Koders"
    })
})

router.post("/",(request,response)=>{
    response.josn({
        message : "Create Koder"
    })
})
module.exports = router