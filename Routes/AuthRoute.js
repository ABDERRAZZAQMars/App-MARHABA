const express = require('express')
const router = express.Router()


//Les Function Authentification
const { Login, register, ForgetPassword, ResetPassword } = require('../Controllers/AuthController')

//url : /api/auth
router.post('/login', Login)
router.post('/register/', register)
router.post('/forgetpassword', ForgetPassword)
router.post('/resetpassword/:token', ResetPassword)




module.exports = router