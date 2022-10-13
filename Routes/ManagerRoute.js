const express = require('express')
const router = express.Router()

//Les Function Manager
const { GetUserManger } = require('../Controllers/ManagerController')

//url : api/user/manager
router.get('/getusermanger', GetUserManger)

module.exports = router