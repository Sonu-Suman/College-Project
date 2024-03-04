import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

const LogIn = () => {
    
    const login = () => {
        alert("You have logged up");
    }

  return (
    <>
        <div className="login-form">
            <div className="login-form-inner">
                <h1 className='gradient__text'>Log in</h1>
                <div className="login-form-inner-labels">
                    <label className='gradient__text' >Phone no :</label>
                    <label className='gradient__text' >Password :</label>
                </div>
                <div className="login-form-inner-inputs">
                    <input type='phone' name='Phone no.' />
                    <input type='password' name='Password.' />
                    <button onClick={login}>Log In</button>
                    <Link className='login-form-inner-input-signup' to='../SignUp'>Create an account
                        <span role='img' aria-label='go to sign up page'>👈👈</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default LogIn
