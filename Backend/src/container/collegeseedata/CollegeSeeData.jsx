import React, { useState } from 'react'
import './collegeseedata.css'
import prototype_img from '../../assets/photo.png'
import { Link} from "react-router-dom"
import axios from 'axios';


let backend_data = [{'date': '2024-05-11', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-12', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-13', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-14', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-15', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-16', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'}
                    ]


const CollegeSeeData = () => {
  let today = new Date().toISOString().slice(0, 10);
  const [records, setRecords] = useState(backend_data);

  const SubmitForm = () => {
    let Id = document.getElementById('college_id').value;
    let registration = document.getElementById('registration_number').value;
    let starting_date = document.getElementById('starting_date').value;
    let ending_date = document.getElementById('ending_date').value;

    if (Id === '' || registration === ''){
      alert("Please provide all informations!!!!!!!!")
    } else {

      let data = [Id, registration, starting_date, ending_date];

      const SendDataBackend = async (data) => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/', data);
          console.log(response.data);
          console.log(response.data.data);
          setRecords(response.data.data);
        } catch (error) {
          alert('Error sending data to backend.\n'+error.message);
          console.log('Error sending data to backend:', error.message);
        }
      }

      SendDataBackend(data);
      console.log(data);

      document.getElementById('college_id').value = '';
      document.getElementById('registration_number').value = '';
      document.getElementById('starting_date').value = '';
      document.getElementById('ending_date').value = '';
    }
  }


  return (
    <>
      <div className="collegeseedata-form">
        <div className="collegeseedata-from__submit-form">
          <div className="collegeseedata-form__submit-form-header">
            <h1 className='gradient__text'>Find Any Student Data</h1>
          </div>
          <hr />
          <div className="collegeseedata-form__submit-form-labels-inputs">
            <label className='gradient__text'>Your ID :</label>
            <input type="text" id='college_id' name='college_id'/>
            <label className='gradient__text'>Registration No. :</label>
            <input type="text"  id='registration_number' name='registration_number'/>
            <div className="collegeseedata-form__submit-form-labels-inputs-date">
              <div className="collegeseedata-form__submit-form-labels-inputs-date-start">
                <label >Start Date :</label>
                <input type='date' max={today} id='starting_date' name='starting_date'></input>
              </div>
              <div className="collegeseedata-form__submit-form-labels-inputs-date-end">
                <label >End Date :</label>
                <input type='date' max={today} id='ending_date' name='ending_date'></input>
              </div>
            </div>
          </div>
          <div className="collegeseedata-form__submit-button">
            <button onClick={SubmitForm}>Show Data</button>
            <Link className='collegeseedata-form__submit-link' to='/CameraRegistration'>Add more camera.
                <span role='img' aria-label='go to sign in page'>👈👈</span>
            </Link>
          </div>
        </div>
        <div className="collegeseedata-form__data">
          <div className="collegeseedata-form__data-header">
            <h1 className='gradient__text'>Student Data</h1>
          </div>
          <div className="collegeseedata-form__data-top">
            <div className="collegeseedata-form__data-top-left">
              <img src={prototype_img} alt="user_photo" />
            </div>
            <div className="collegeseedata-form__data-top-right">
              <div className="collegeseedata-form__data-top-right-labels">
                <label className='gradient__text'>Name :</label>
                <label className='gradient__text'>Father Name :</label>
                <label className='gradient__text'>Registration No. :</label>
                <label className='gradient__text'>College Name :</label>
                <label className='gradient__text'>Department :</label>
                <label className='gradient__text'>Semester :</label>
              </div>
              <div className="collegeseedata-form__data-top-right-inputs">
                <input type="text" id='student_name' name='student_name' value='Suman Kumar' disabled/>
                <input type="text" id='father_name' name='father_name' value='Surendra Prasad Singh' disabled/>
                <input type="text" id='register_number' name='register_number' value='20104133015' disabled/>
                <input type="text" id='college_name' name='college_name' value='Government Engineering College, Jamui' disabled/>
                <input type="text" id='department' name='department' value='Electronics and Communication Engineering' disabled/>
                <input type="text" id='semester' name='semester' value='8th' disabled/>
              </div>
            </div>
          </div>
          <div className="collegeseedata-form__middle">
            <table className='collegeseedata-form__middle-table'>
              <thead className='collegeseedata-form__middle-table-head'>
                <tr>
                  <th>Date</th>
                  <th>In Time</th>
                  <th>Out Time</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody className='collegeseedata-form__middle-table-body'>
                {records.map((element, i) => (
                  <tr key={i}>
                    <td type='text' id='date_column' name='date_column' >{element.date}</td>
                    <td type='text' id='in_column' name='in_column' >{element.in_time}</td>
                    <td type='text' id='out_column' name='out_column' >{element.out_time}</td>
                    <td type='text' id='duration_column' name='duration_column' >{element.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default CollegeSeeData
