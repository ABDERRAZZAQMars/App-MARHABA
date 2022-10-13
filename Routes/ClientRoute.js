const express = require('express')
const router = express.Router()

//Les Function Client
const { GetUserClient } = require('../Controllers/ClientController')

//url : api/user/client
router.get('/getuserclient', GetUserClient)

module.exports = router