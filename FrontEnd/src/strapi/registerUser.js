import React from 'react'
import axios from 'axios'
import url from '../utils/URL-Mongo'


async function registerUser({email, password, username}) {
 const response = await axios.post(`${url}/api/v1/register`,{
  username,
  email,
  password
 }).catch(error=>console.log(error))
  return response
}

export default registerUser
