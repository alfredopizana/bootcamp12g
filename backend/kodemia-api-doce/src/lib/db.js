const mongoose = require('mongoose');
const DB_USER = 'alfred'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-12va.dwrb1.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

function connect(){
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connect