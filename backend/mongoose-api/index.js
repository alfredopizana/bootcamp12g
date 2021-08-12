const express = require("express")
const mongoose = require("mongoose")
const Koder = require("./kodersModel")
const DB_USER = 'alfred'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-12va.dwrb1.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
const server = express()
server.use(express.json())
server.get("/", (request, response) => {
    response.json({
        messages: "API with mongoose"
    })
})
server.get("/koders", async (request, response) => {
    try {

        const { gender, age, is_min_age } = request.query
        let filters = {}
        if (gender) filters.gender = gender
        if (age) {
            filters.age = Number(age)
            if (is_min_age === true)
                filters.age = { $gte: age }
        }
        const koders = await Koder.find(filters)
        response.json({
            succes: true,
            messages: "all koders of DB",
            data: {
                koders
            }
        })
    } catch (error) {

    }

})
server.post("/koders", async (request, response) => {
    try {
        const newKoder = request.body
        const koderCreated = await Koder.create(newKoder)
        response.json({
            succes: true,
            messages: "all koders of DB",
            data: {
                koderCreated
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            sucess:false,
            message:error.message
        })
    }
})
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async (connection) => {
        console.log('DB Connected')
        server.listen(8080, () => {
            console.log("Server Listening")
        })
    }).catch(err => {
        console.log('Error: ', err)
    })

