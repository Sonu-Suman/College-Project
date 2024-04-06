import React from 'react'
import './signup.css'
import { Link } from "react-router-dom"


const SignUp = () => {

  const signUp = () => {
    alert("You have signed up");
  }

  return (
      <div className="signup-form">
        <div className="signup-form-inner">
          <h1 className='gradient__text'>Sign Up</h1>
          <div className="signup-form-inner-labels">
            <label className='gradient__text' >Name :</label>
            <label className='gradient__text' >Email :</label>
            <label className='gradient__text' >Phone No :</label>
            <label className='gradient__text'>Password :</label>
            <label className='gradient__text' >Confirm Password :</label>
          </div>
          <div className="signup-form-inner-input">
            <input type='text' name='Name' />
            <input type='email' name='Email'/>
            <input type='phone' name='Phone no.' />
            <input type='password' name='Password' />
            <input type='password' name='Password' />
            <button onClick={signUp}>Sign Up</button>
            <Link className='signup-form-inner-input-login' to='../Login'>You have an already Sign Up
              <span role='img' aria-label='go to login page'>👈👈</span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default SignUp