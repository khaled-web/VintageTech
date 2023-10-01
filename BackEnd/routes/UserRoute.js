//............
//importing
//............
const express = require('express')
const router = express.Router()
const {
 registerUser,
 loginUser,
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updatePassword,
 updateName
} = require('../Controllers/UserController.js')

const {
 auth
} = require('../middleware/auth-JWT.js')

//............
//app
//............

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/users').get(getAllUsers) //addAuth
router.route('/showMe').get(showCurrentUser) //addAuth
router.route('/updatePass').patch(updatePassword) //addAuth
router.route('/updateName').patch(updateName) //addAuth
router.route('/users/:id').get(getSingleUser) //addAuth

//............
//importing
//............
module.exports = router