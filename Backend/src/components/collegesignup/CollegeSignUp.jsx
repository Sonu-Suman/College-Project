import React, { useState, useEffect } from 'react'
import './collegesignup.css'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';


const CollegeSignUp = () => {
    const navigate = useNavigate();
    // For receving data from python backend
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fetchAction() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/take/');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }}
        fetchAction();
    }, []);
  
    console.log(students);

    const Reset = () => {
        document.getElementById('cname').value = null;
        document.getElementById('cregistration').value = null;
        document.getElementById('cpname').value = null;
        document.getElementById('cemail').value = null;
        document.getElementById('cdistrict').value = null;
        document.getElementById('cpincode').value = null;
        document.getElementById('cphone').value = null;
        document.getElementById('cstate').value = null;
        document.getElementById('cregisteredcamera').value = null;
    }

    const collegeRegister = () => {
        // Accessing all data from HTML backend
        let college_name = document.getElementById('cname').value;
        let registration_no = document.getElementById('cregistration').value;
        let principal_name = document.getElementById('cpname').value;
        let email = document.getElementById('cemail').value;
        let district = document.getElementById('cdistrict').value;
        let pin_code = document.getElementById('cpincode').value;
        let phone = document.getElementById('cphone').value;
        let state = document.getElementById('cstate').value;
        let total_registered_camera = document.getElementById('cregisteredcamera').value;

        
        // For storing all data in a javascript array.
        let data = [college_name, registration_no, principal_name, email, district, pin_code, phone, state,
                             total_registered_camera];

        console.log(data);
        
        // sendDataToBackend is function to send data to django Backend
        const sendDataToBackend = async (data) => {
            try {                           // implementing error cathing 
              const response = await axios.post('http://127.0.0.1:8000/', data);       // This is Backend server link
              console.log(response.data); // Response from Django backend
              Reset();
            } catch (error) {
              console.error('Error sending data to backend:', error);
            }
        };
          
        sendDataToBackend(data);             // Sending data to backend server
        alert("Your information successfully submitted!!!!!!!!!");
        navigate('/CameraRegistration');
    }

    
  return (
    <>
      <div className="college_registration-form">
        <div className="college_registration-form__top">
            <h1 className='gradient__text'>College <br /> Registration Page</h1>
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
            </div>
            <div className="college_registration-form__bottom-inputs">
                <input type="number" id='cregisteredcamera' name='cregisteredcamera'/>
            </div>
        </div>
        <div className="college_registration-form__submit">
            <button onClick={collegeRegister}>Submit</button>
            <Link className='college_registration-from__submit-link' to='../StudentRegister'>Already have a account
                <span role='img' aria-label='go to sign in page'>👈👈</span>
            </Link>
        </div>
      </div>
    </>
  )
}

export default CollegeSignUp
