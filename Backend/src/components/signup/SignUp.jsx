import React from 'react'
import './signup.css'
import { Link } from "react-router-dom"


const SignUp = () => {

  const signUp = () => {
    alert("You have signed up");
  }

  return (
    <>
    <div className="signup-form">
      <div className="signup-form__top">
        <h1 className='gradient__text'>Sign Up</h1>
        <div className="signup-form__top-field">
          <div className="signup-form__top-field-labels">
            <label className='gradient__text'>Reg. No. :</label>
            <label className='gradient__text'>Name :</label>
            <label className='gradient__text'>Father Name :</label>
          </div>
          <div className="signup-form__top-field-inputs">
            <input type="text" id="reg_no" name="reg_no"/>
            <input type="text" id="sname" name="sname"/>
            <input type="text" id="fname" name="fname"/>
          </div>
        </div>
      </div>
      <div className="signup-form__middle">
        <div className="signup-form__middle-left">
          <div className="signup-form__middel-left-labels">
            <label className='gradient__text'>Email :</label>
            <label className='gradient__text'>Roll No. :</label>
            <label className='gradient__text'>Depart. :</label>
            <label className='gradient__text'>State :</label>
          </div>
          <div className="signup-form__middle-left-inputs">
            <input type="email" id="semail" name="semail"/>
            <input type="text" id="sroll" name="sroll"/>
            <input type="text" id="sdepart" name="sdepart"/>
            <input type="text" id="sstate" name="sstate"/>
          </div>
        </div>
        <div className="signup-form__middel-right">
          <div className="signup-form__middle-right-labels">
            <label className='gradient__text'>Phone No. :</label>
            <label className='gradient__text'>Semester :</label>
            <label className='gradient__text'>District :</label>
            <label className='gradient__text'>Pin Code :</label>
          </div>
          <div className="signup-form__middle-right-inputs">
            <input type="text" id="sphone" name="sphone"/>
            <input type="text" id="ssemester" name="ssemester"/>
            <input type="text" id="sdistrict" name="sdistrict"/>
            <input type="text" id="spincode" name="spincode"/>
          </div>
        </div>
      </div>
      <div className="signup-form__bottom">
        <div className="signup-form__bottom-labels">
          <label className='gradient__text'>Candidate photo 1 :</label>
          <label className='gradient__text'>Candidate photo 2 :</label>
          <label className='gradient__text'>Allowed</label>
          <label className='gradient__text'>Denied</label>
        </div>
        <div className="signup-form__bottom-inputs">
          <input type="file" id="sphoto1" name="sphoto1"/>
          <input type="file" id="sphoto1" name="sphoto1"/>
          <input className="signup-form__bottom-access" type="radio" id="sallowed" name="sallowed"/>
          <input className="signup-form__bottom-access" type="radio" id="sdenied" name="sdenied"/>
        </div>
      </div>
      <div className="signup-form__submit">
        <button onClick={signUp}>Sign Up</button>
        <Link className='login-form-inner-input-signup' to='../Login'>Already have a account
            <span role='img' aria-label='go to sign in page'>👈👈</span>
        </Link>
      </div>
    </div>
    </>
  )
}

export default SignUp