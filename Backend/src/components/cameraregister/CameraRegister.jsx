import React, { useState, useEffect} from 'react'
import './cameraregister.css'
import axios from 'axios';


const CameraRegister = () => {
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

    const cameraRegister = () => {
        // Accessing all data from HTML frontend
        let camera_id = document.getElementById('cacamid').value;
        let college_id = document.getElementById('cacollegeid').value;
        let placed = document.getElementById('caplaced').value;
        let in_out = document.getElementById('cainout').value;
        let semester = document.getElementById('casem').value;
        let roomno = document.getElementById('caroom').value;
        let department = document.getElementById('cadepart').value;
        

        let form_data = [camera_id, college_id, placed, in_out, semester, roomno, department];

        const sendDataToBackend = async (data) => {
            try {
              const response = await axios.post('http://127.0.0.1:8000/', data);
              console.log(response.data); // Response from Django backend
            } catch (error) {
              console.error('Error sending data to backend:', error);
            }
        };
      
        sendDataToBackend(form_data);

        alert("Now Your camera successfully connected to system!!!!!!!");
    }

  return (
    <>
      <div className="camera_registration-form">
        <div className="camera_registration-form__top">
            <h1 className='gradient__text'>Connect Camera</h1>
            <div className="camera_registration-form__top-field">
                <div className="camera_registration-from__top-field-labels">
                    <label className='gradient__text'>Camera ID :</label>
                    <label className='gradient__text'>College ID :</label>
                    <label className='gradient__text'>Placed :</label>
                </div>
                <div className="camera_registration-form__top-field-inputs">
                    <input type="text" id='cacamid' name='cacamid'/>
                    <input type="text" id='cacollegeid' name='cacollegeid'/>
                    <input type="text" id='caplaced' name='caplaced'/>
                </div>
            </div>
        </div>
        <div className="camera_registration-form__middle">
            <div className="camera_registration-form__middle-left">
                <div className="camera_registration-form__middle-left-labels">
                    <label className='gradient__text'>In / Out :</label>
                    <label className='gradient__text'>Semester :</label>
                </div>
                <div className="camera_registration-form__middle-left-inputs">
                    <input type="text" id='cainout' name='cainout'/>
                    <input type="text" id='casem' name='casem'/>
                </div>
            </div>
            <div className="camera_registration-form__middle-right">
                <div className="camera_registration-form__middle-right-labels">
                    <label className='gradient__text'>Room No. :</label>
                    <label className='gradient__text'>Department :</label>
                </div>
                <div className="camera_registration-form__middle-right-inputs">
                    <input type="number" id='caroom' name='caroom'/>
                    <input type="text" id='cadepart' name='cadepart'/>
                </div>
            </div>
        </div>
        <div className="camera_registration-form__submit">
            <button onClick={cameraRegister}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default CameraRegister
