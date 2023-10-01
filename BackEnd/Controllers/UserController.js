//..........
//Importing
//..........

const User = require('../models/UserModel')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors')

//........
//App
//........

//Register
const registerUser = async (req, res) => {
 res.send('Register User')
}

//login
const loginUser = async (req, res) => {
 res.send('Login User')
}

//getAllUsers
const getAllUsers = async (req, res) => {
 res.send('Get All Users')
}

//getSingleUser
const getSingleUser = async (req, res) => {
 res.send('get single user')
}

//showCurrentUser
const showCurrentUser = async (req, res) => {
 res.send('show Current User')
}

//updatePassword
const updatePassword = async (req, res) => {
 res.send('update password')
}

//updateName
const updateName = async (req, res) => {
 res.send('update name')
}

//.............
//Exporting
//.............

module.exports = {
 registerUser,
 loginUser,
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updatePassword,
 updateName
}