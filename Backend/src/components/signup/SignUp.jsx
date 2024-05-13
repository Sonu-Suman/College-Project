import React from 'react'
import './signup.css'
import { Link } from "react-router-dom"


const SignUp = () => {

  const signUp = () => {
    let registration_no = document.getElementById('sreg_no').value;
    let name = document.getElementById('sname').value;
    let father_name = document.getElementById('sfname').value;
    let email = document.getElementById('semail').value;
    let roll_no = document.getElementById('sroll').value;
    let department = document.getElementById('sdepart').value;
    let state = document.getElementById('sstate').value;
    let phone_no = document.getElementById('sphone').value;
    let semester = document.getElementById('ssemester').value;
    let district = document.getElementById('sdistrict').value;
    let pincode = document.getElementById('spincode').value;
    let allowed = document.getElementById('sallowed').value;
    let denied = document.getElementById('sdenied').value;
    let photo1 = document.getElementById('sphoto1').value;
    // let imgData = canvasElement.toDataURL(photo1);
    // let photo2 = document.getElementById('sphoto2');

    console.log(registration_no);
    console.log(name);
    console.log(father_name);
    console.log(email);
    console.log(roll_no);
    console.log(department);
    console.log(state);
    console.log(district);
    console.log(pincode);
    console.log(phone_no);
    console.log(semester);
    console.log(photo1);
    // console.log('ImgData :', imgData)
    // console.log(photo2);
    console.log(allowed);
    console.log(denied);
    alert("You have signed up");
  }

  return (
    <>
    <form action='' id="signupForm" className="signup-form">
      <div className="signup-form__top">
        <h1 className='gradient__text'>Sign Up</h1>
        <div className="signup-form__top-field">
          <div className="signup-form__top-field-labels">
            <label className='gradient__text'>Reg. No. :</label>
            <label className='gradient__text'>Name :</label>
            <label className='gradient__text'>Father Name :</label>
          </div>
          <div className="signup-form__top-field-inputs">
            <input type="text" id="sreg_no" name="sreg_no" />
            <input type="text" id="sname" name="sname"/>
            <input type="text" id="sfname" name="sfname"/>
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
          <input className="signup-form__bottom-access" type="radio" id="sallowed" name="saccess" value="allowed"/>
          <input className="signup-form__bottom-access" type="radio" id="sdenied" name="saccess" value="denied"/>
        </div>
      </div>
      <div className="signup-form__submit">
        <button onClick={signUp}>Sign Up</button>
        {/* <button type='signUp'>Sign Up</button> */}
        <Link className='signup-form__submit-login' to='../Login'>Already have a account
            <span role='img' aria-label='go to sign in page'>👈👈</span>
        </Link>
      </div>
    </form>
    </>
  )
}

export default SignUp