const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    lastName : {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    modules : {
        type: [String],
        enum: [ 'Maquetado','JS','Cloud','Backend','React'],
        required:true
    },
    gender : {
        type: String,
        enum: ['m', 'f'],
        required: true
    }
})
//
const model = mongoose.model('mentors', mentorSchema)
module.exports = model