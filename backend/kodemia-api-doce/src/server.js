// Definicion de nuestro servidor

const express = require('express')
const cors = require('cors')
const logger = require('./middlewares/logger')
const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const cellRouter = require('./routers/mentors')
const authRouter = require('./routers/auth')

const server = express()
// middlewares
server.use(cors())
server.use(express.json())
server.use(logger)
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)
server.use('/cells', cellRouter)
server.use('/auth', authRouter)
// agregar routers

module.exports = server
