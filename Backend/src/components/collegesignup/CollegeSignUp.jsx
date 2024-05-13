import React from 'react'
import './collegesignup.css'
import { Link } from "react-router-dom"


const CollegeSignUp = () => {

    const collegeRegister = () => {
        alert("Your information successfully submitted!!!!!!!!!");
    }

  return (
    <>
      <div className="college_registration-form">
        <div className="college_registration-form__top">
            <h1 className='gradient__text'>College <br /> Registration Form</h1>
            <div className="college_registration-form__top-field">
                <div className="college_registration-form__top-field-labels">
                    <label className='gradient__text'>College Name :</label>
                    <label className='gradient__text'>College Registration No. :</label>
                    <label className='gradient__text'>Principal Name :</label>
                </div>
                <div className="college_registration-form__top-field-inputs">
                    <input type="text"  id="cname" name="cname"/>
                    <input type="text"  id="cregistration" name="cregistration"/>
                    <input type="text"  id="cpname" name="cpname"/>
                </div>
            </div>
        </div>
        <div className="college_registration-form__middle">
            <div className="college_registration-form__middle-left">
                <div className="college_registration-form__middle-left-labels">
                    <label className='gradient__text'>College Email :</label>
                    <label className='gradient__text'>District :</label>
                    <label className='gradient__text'>Pin Code :</label>
                </div>
                <div className="college_registration-form__middle-left-inputs">
                    <input type="text"  id="cemail" name="cemail"/>
                    <input type="text"  id="cdistrict" name="cdistrict"/>
                    <input type="text"  id="cpincode" name="cpincode"/>
                </div>
            </div>
            <div className="college_registration-form__middle-right">
                <div className="college_registration-form__middle-right-labels">
                    <label className='gradient__text'>College Phone No. :</label>
                    <label className='gradient__text'>State :</label>
                </div>
                <div className="college_registration-form__middle-right-inputs">
                    <input type="text" id='cphone' name='cphone' />
                    <input type="text" id='cstate' name='cstate'/>
                </div>
            </div>
        </div>
        <div className="college_registration-form__bottom">
            <div className="college_registration-form__bottom-labels">
                <label className='gradient__text'>Total Registered Camera :</label>
                <label className='gradient__text'>Password :</label>
                <label className='gradient__text'>Confirm Password :</label>
            </div>
            <div className="college_registration-form__bottom-inputs">
                <input type="number" id='cregisterescamera' name='cregisteredcamera'/>
                <input type="password" id='cpassword' name='cpassword'/>
                <input type="password" id='cconfirmpassword' name='cconfirmpassword'/>
            </div>
        </div>
        <div className="college_registration-form__submit">
            <button onClick={collegeRegister}>Submit</button>
            <Link className='college_registration-from__submit-link' to='../Login'>Already have a account
                <span role='img' aria-label='go to sign in page'>👈👈</span>
            </Link>
        </div>
      </div>
    </>
  )
}

export default CollegeSignUp
