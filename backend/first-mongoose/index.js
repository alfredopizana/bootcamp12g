const mongoose = require('mongoose');
const DB_USER = 'alfred'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-12va.dwrb1.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

//Schema

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true
    },
    age: {
        type: Number,
        min: 0,
        max: 90,
        require: true
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        require: true
    }
})

//
const Koder = mongoose.model('koders', koderSchema)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async (connection) => {
        console.log('DB Connected')
        //console.log(connection)
        const koders = await Koder.find({})
        //console.log(koders)
        const koderCreated = await Koder.create({name:"Alfred", lastName:"Pizaña",gender:"m", age:27})
        console.log(koderCreated)
    }).catch(err => {
        console.log('Error: ', err)
    })

