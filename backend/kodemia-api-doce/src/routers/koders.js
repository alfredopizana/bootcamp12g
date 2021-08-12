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
            sucess: true,
            message: "Error a get All Koders",
            error: error.message
        })
    }
})
module.exports = router