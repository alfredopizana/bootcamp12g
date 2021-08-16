const express = require("express")
const router = express.Router()
const Cell = require("../usecases/cells")
router.get("/", async (request, response) => {
    try {
        const allCells = await Cell.getAll()
        response.json({
            success: true,
            message:"All Cells",
            data: {
                cells: allCells
            }
        })
    } catch (error) {
        response.json({
            success: true,
            message: "get all cells",
            error: error.message
        })
    }
})
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const allCells = await Cell.getById(id)
        response.json({
            success: true,
            message:"All Cells",
            data: {
                cells: allCells
            }
        })
    } catch (error) {
        response.json({
            success: true,
            message: "get all cells",
            error: error.message
        })
    }
})
router.patch("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const allCells = await Cell.addSubitemById()
        response.json({
            success: true,
            message:"All Cells",
            data: {
                cells: allCells
            }
        })
    } catch (error) {
        response.json({
            success: true,
            message: "get all cells",
            error: error.message
        })
    }
})
router.patch("/:id/mentors", async (request, response) => {
    try {
        const { id } = request.params
        const allCells = await Cell.addSubitemById()
        response.json({
            success: true,
            message:"All Cells",
            data: {
                cells: allCells
            }
        })
    } catch (error) {
        response.json({
            success: true,
            message: "get all cells",
            error: error.message
        })
    }
})