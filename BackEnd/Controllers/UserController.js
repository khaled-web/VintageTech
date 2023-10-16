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
 const {
  name,
  email,
  password
 } = req.body

 if (!name || !email || !password) {
  throw new CustomError.BadRequestError('Please provide all')
 }

 const emailAlreadyExists = await User.findOne({
  email
 })
 if (emailAlreadyExists) {
  throw new CustomError.BadRequestError('Email Already Exists')
 }

 const user = await User.create({
  name,
  email,
  password
 })

 const token = user.createJWT()
 res.status(StatusCodes.CREATED).json({
  user: {
   name,
   email
  },
  token
 })

}

//login
const loginUser = async (req, res) => {
 const {
  email,
  password
 } = req.body

 if (!email || !password) {
  throw new CustomError.BadRequestError("Please Provide email and password")
 }

 const user = await User.findOne({
  email
 }).select('+password')
 if (!user) {
  throw new CustomError.UnauthenticatedError('Invalid Credentials')
 }

 const isPasswordCorrect = await user.comparePassword(password)
 if (!isPasswordCorrect) {
  throw new CustomError.UnauthenticatedError('Password is not Correct')
 }

 const token = user.createJWT()
 user.password = undefined
 res.status(StatusCodes.OK).json({
  user,
  token
 })
}

//getAllUsers
const getAllUsers = async (req, res) => {
 const users = await User.find({}).select('-password')
 res.status(StatusCodes.OK).json({
  count: users.length,
  users
 })
}

//getSingleUser
const getSingleUser = async (req, res) => {
 const user = await User.findOne({
  _id: req.params.id
 }).select('-password')
 if (!user) {
  throw new CustomError.NotFoundError(`no user with id ${req.params.id}`)
 }
 res.status(StatusCodes.OK).json({
  user
 })
}

//showCurrentUser
const showCurrentUser = async (req, res) => {
 res.status(StatusCodes.OK).json({
  use: req.user
 })

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