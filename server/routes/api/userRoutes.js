const express = require('express')
const router = express.Router()

// controller functions
const { loginUser, getUsers } = require('../../controllers/authController')


// login route
router.post('/login', loginUser)
router.get('/', getUsers)


module.exports = router