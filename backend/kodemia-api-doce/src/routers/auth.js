const express = require('express')
const auths = require('../usecases/auth')
const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await auths.login(email, password)
    response.json({
      sucess: true,
      message: 'Koder logedd In',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      sucess: false,
      message: 'Could not log in',
      error: error.message
    })
  }
})
module.exports = router
