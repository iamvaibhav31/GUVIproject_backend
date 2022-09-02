const usercontroller = require('../Controllers/userController')
const auth = require('../Middlewares/auth')
const express = require('express');
const router = express.Router()


router.post('/register', usercontroller.register)
router.post('/login', usercontroller.login)
router.get('/userProfile/:id', auth.authenticateToken, usercontroller.userProfile)
router.post('/userProfile/update/:id', auth.authenticateToken, usercontroller.userProfileUpdate)
module.exports = router;

// authenticateToken