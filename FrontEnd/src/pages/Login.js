import React, {useState} from "react";

//strapi-function

//handle user
import {useHistory} from 'react-router-dom'



export default function Login() {
  const history = useHistory()
  //setup user context

  //state values
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [username, setUsername]=useState('')
  const [isMember, setIsMember]=useState(false)
  
  let isEmpty =  false

  const toggleMember = ()=>{}

  const handleSubmit = async (e)=>{}
  return(
    <section className="form section">
      <h2 className="section-title">
        {isMember?'sign in':'register'}
      </h2>
      <form className="login-form">
        {/* singleInput */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="email" id="email" value={email} onChange={e=>{
            setEmail(e.target.value)
            }}/>
        </div>
        {/* endOfSingleInput */}
        
        {/* singleInput */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" id="password" value={password} onChange={e=>{
            setPassword(e.target.value)
            }}/>
        </div>
        {/* endOfSingleInput */}
        {/* singleInput */}
        {!isMember&&(
        <div className="form-control">
          <label htmlFor="username">username</label>
          <input type="username" id="username" value={username} onChange={e=>{
            setUsername(e.target.value)
          }}/>
        </div>
          )}
          {/* endOfSingleInput */}


      </form>
    </section>
    )
}
