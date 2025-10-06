import React, { useState } from 'react'
import './authPage.css'
import Image from '../../components/image/Image';


function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [ error, setError] = useState("");
  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt=""/>
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm">
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input type="text"  name="username" id="username" placeholder="username" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input type="text"  name="name" id="name" placeholder="name" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="text"  name="email" id="email" placeholder="email" required/>
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="password"  name="password" id="password" placeholder="password" required/>
            </div>
            <button type="submit">Register</button>
            <p onClick={()=> setIsRegister(false)}>Already have an account? <b>Login</b></p>
            {error && <p className='error'> {error}</p>}
        </form>
        ) : (
          <form key="LoginForm">
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="text"  name="email" id="email" placeholder="email" required/>
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password"  name="password" id="password" placeholder="password" required/>
          </div>
          <button type="submit">Login</button>
          <p onClick={()=> setIsRegister(true)}>Don't have an account? <b>Register</b></p>
          {error && <p className='error'> {error}</p>}
        </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage