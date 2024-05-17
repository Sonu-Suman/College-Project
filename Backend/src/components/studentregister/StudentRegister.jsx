import React, { useState} from 'react'
import './studentregister.css'
import { Link } from "react-router-dom"
import axios from 'axios';


const SignUp = () => {
  const [imgS, setimgS] = useState();
  const [imgS2, setimgS2] = useState();

  // For receving data from python backend
  let [received, receivedData] = useState(null);

  // ----------------------------- for photo1 ------------------------
  const convertIntoBase64 = (e) => {
    // console.log(e.target.files);
    const data = new FileReader();
    
    data.addEventListener('load', ()=>{
      setimgS(data.result);
    })
    data.readAsDataURL(e.target.files[0]);
  }

  // ---------------------------- for photo 2 ----------------------------
  const convertIntoBase642 = (e) => {
    // console.log(e.target.files);
    const data = new FileReader();
    
    data.addEventListener('load', ()=>{
      setimgS2(data.result);
    })
    data.readAsDataURL(e.target.files[0]);
  }


  const signUp = () => {
    let college_id = document.getElementById('scollege_id').value;
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
    let access = document.querySelector('input[name="saccess"]:checked').value;

    let data = [registration_no, name, father_name, email, roll_no, department, state, 
                  district, pincode, phone_no, semester, access, imgS, imgS2, college_id ];
    
    // Check two photo of a candidate added or not 
    //         if No, then run this if condition
    if (imgS === undefined || imgS2 === undefined ) {
      alert("Please add two photos of a candidate!!!");
      document.getElementById('sphoto1').value = null;
      document.getElementById('sphoto2').value = null;
    } 
    else {                                     //       if Yes. then run this else condition.
      let txt = '';
      // Now, I am again asking permission from candidate for creating account in system.
      //          if Yes, then run this condition
      if (window.confirm("Yes, I want to create an account.")) {
        txt = "OK";
      } else {
        txt = "Cancel";
      }

      if (txt === 'OK') {
        console.log(data);
        // Sending data to python backend from frontend
        const sendDataToBackend =  async(data) => {
          // data.preventDefault();    
          try {
            const response = await axios.post('http://127.0.0.1:8000/', data);  
            receivedData(response.data);
            console.log(response.data); // Response from Django backend
          } catch (error) {
            console.error('Error sending data to backend:', error);
          }
        };

        sendDataToBackend(data);
      } 
      //            If candidate canceled the permission. then this condition run by program.
      else {
        alert("You have canceled it!")
      }
      // console.log(received);
      // alert("You have signed up");
    }
  }


  return (
    <>
    <div className="signup-form">
      <div className="signup-form__top">
        <h1 className='gradient__text'>Student <br /> Registration Page</h1>
        <div className="signup-form__top-field">
          <div className="signup-form__top-field-labels">
          <label className='gradient__text'>College ID :</label>
            <label className='gradient__text'>Reg. No. :</label>
            <label className='gradient__text'>Name :</label>
            <label className='gradient__text'>Father Name :</label>
          </div>
          <div className="signup-form__top-field-inputs">
            <input type="text" id="scollege_id" name="scollege_id" />
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
          <input type="file" accept='.jpeg, .png, .jpg' id="sphoto1" name="sphoto1" onChange={convertIntoBase64}/>
          <input type="file" accept='.jpeg, .png, .jpg' id="sphoto2" name="sphoto2" onChange={convertIntoBase642}/>
          <input className="signup-form__bottom-access" type="radio" id="sallowed" name="saccess" value="allowed"/>
          <input className="signup-form__bottom-access" type="radio" id="sdenied" name="saccess" value="denied"/>
        </div>
      </div>
      <div className="signup-form__submit">
        <button onClick={signUp}>Sign Up</button>
        {/* <button type='signUp'>Sign Up</button> */}
        <Link className='signup-form__submit-login' to='/CollegeRegistration'>Don't have a account
            <span role='img' aria-label='go to sign in page'>👈👈</span>
        </Link>
      </div>
    </div>
    </>
  )
}

export default SignUp