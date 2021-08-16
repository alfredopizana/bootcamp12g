const express = require("express")
const router = express.Router()
const koders =  require("../usecases/koders")
router.get("/",async (request,response)=>{
    try{
        const allKoders = await koders.getAll()
        response.json({
            sucess: true,
            message: "All Koders",
            data: {
                koders: allKoders
            }
        })
    }
    catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "Error at get All Koders",
            error: error.message
        })
    }
})
router.post("/",async (request,response)=>{
    try {
        const koderData = request.body
        const koderCreated = await koders.create(koderData)
        response.json({
            succes:true,
            message:"Koder created",
            data:{
                koder: koderCreated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            sucess: false,
            message: "Error a create koder",
            error: error.message
        })
    }
})
router.delete("/:id", async (request,response)=>{
    try{
        const {id} = request.params
        const koderDeleted = await koders.deleteById(id)
        response.json({
            succes: true,
            message: "Koder deleted",
            data: {
                koder: koderDeleted
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "Error at delete koder",
            error: error.message
        })
    }
})
router.patch("/:id", async(request,response)=>{
    try{
        const { id } = request.params
        const { body : koderData } = request
        const koderUpdated = await koders.updateById(id,koderData)
        response.json({
            succes: true,
            message: "Koder updated",
            data: {
                koder: koderUpdated
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "Error at patch koder",
            error: error.message
        })
    }
})
module.exports = router