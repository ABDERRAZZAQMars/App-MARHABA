const express = require('express')
const router = express.Router()

//Les Function Livreur
const { GetUserLivreur } = require('../Controllers/LivreurController')

//url : api/user/livreur
router.get('/getuserlivreur', GetUserLivreur)

module.exports = router