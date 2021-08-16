const express = require("express")
const router = express.Router()
const mentors =  require("../usecases/mentors")

router.get("/", async (request, response)=>{
    try {
        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            message: "All Mentors",
            data: {
                mentors:  allMentors
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: "Error at get all mentors"
        })
    }
})
router.get("/:id", async (request, response)=>{
    try {
        const { id } = request.params
        const mentor = await mentors.getById(id)
        response.json({
            success: true,
            message: "All Mentors",
            data: {
                mentor:  mentor
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: "Error at get mentor by Id",
            error: error.message
        })
    }
})
/*
{
    "name":"Elda",
    "lastName": "Corona",
    "gender":"f",
    "modules" : [ "Backend","React"]
}
*/
router.post("/", async (request, response) => {
    try {
        const mentorData = request.body
        const mentorCreated = await mentors.create(mentorData)
        response.json({
            success: 200,
            message: "mentor created",
            data: {
                mentor: mentorCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: "Error at create mentor",
            error: error.message
        })
    }

})
router.patch("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const { body : mentorData } = request
        const mentorUpdated = await mentors.updateById(id, mentorData)
        response.json({
            success: true,
            message:  "mentor updated",
            data: {
                mentor: mentorUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: "Error at patch mentor",
            error: error.message
        })
    }
})

router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const mentorDeleted = await mentors.deleteById(id)
        response.json({
            success: true,
            message: "mentor deleted",
            data: {
                mentor: mentorDeleted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: "error at delete mentor",
            error: error.message
        })
    }

})

module.exports = router