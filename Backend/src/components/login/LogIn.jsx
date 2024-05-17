import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import axios from 'axios';



const LogIn = () => {
    
    const submit = async event => {

        let Id = document.getElementById('Lcollege_id').value;
        let email = document.getElementById('Lemail').value;
        
        let formData = [Id, email];
        event.preventDefault();
        try {
            // --------------------------- Reseting value ----------------------------
            document.getElementById('Lcollege_id').value = null;
            document.getElementById('Lemail').value = null;
            // -----------------------------------------------------
            const response = await axios.post('http://127.0.0.1:8000/login/', formData);
            // Assuming backend returns a token upon successful login
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

  return (
    <>
        <div className="login-form" >
            <div className="login-form-inner">
                <h1 className='gradient__text'>Forget ID</h1>
                <div className="login-form-inner-labels">
                    <label className='gradient__text' >College ID :</label>
                    <label className='gradient__text' >Email :</label>
                </div>
                <div className="login-form-inner-inputs">
                    <input type='text' id='Lcollege_id' name='Lcollege_id'/>
                    <input type='email' id='Lemail' name='l_email'/>
                    <button onClick={submit}>Submit</button>
                    <Link className='login-form-inner-input-signup' to='../CollegeRegistration'>Create an account
                        <span role='img' aria-label='go to sign up page'>👈👈</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default LogIn
