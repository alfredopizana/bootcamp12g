const mongoose = require("mongoose")

const cellSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50
    },
    mentors: [
        {
            type: ObjectId,
            ref: 'mentors'
        }
    ]
})
const model = mongoose.model("cells",cellSchema)
module.exports = model