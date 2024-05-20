import React, { useState } from 'react'
import './showdata.css'
import prototype_photo from '../../assets/square.png'


let backend_data = [{'date': '2024-05-11', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-12', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-13', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-14', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-15', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'},
                    {'date': '2024-05-16', 'in_time': '10:30:51', 'out_time': '12:30:10', 'duration': '02:00:00'}
                    ]


const ShowData = () => {
    let today = new Date().toISOString().slice(0, 10);
    const [records, setRecords] = useState(backend_data);

    const submitData = () => {
        let registration_id = document.getElementById('registration').value;
        let college_id = document.getElementById('college').value;
        let starting_date = document.getElementById('starting_date').value;
        let ending_date = document.getElementById('ending_date').value;

        let form_data = [registration_id, college_id, starting_date, ending_date];


    }


  return (
    <>
      <div className="data-form">
        <div className="data-form__submit-form">
            <div className="data-form__submit-form-tag">
                <h1 className='gradient__text'>Enter Your Details</h1>
            </div>
            <div className="data-form__submit-form-labels-inputs">
                <label className='gradient__text'>Registration Id :</label>
                <input type="text" id='registration' name='registration'/>
                <label className='gradient__text'>College Id :</label>
                <input type="text" id='college' name='college'/>
                <div className="data-form__submit-form-labels-inputs-date">
                    <div className="data-form__submit-form-labels-inputs-date-start">
                        <label >Start Date :</label>
                        <input type='date' max={today} id='starting_date' name='starting_date'></input>
                    </div>
                    <div className="data-form__submit-form-labels-inputs-date-end">
                        <label >End Date :</label>
                        <input type='date' max={today} id='ending_date' name='ending_date'></input>
                    </div>
                </div>
            </div>
            <div className="data-form__submit-form-sbumit">
                <button onClick={submitData}>Show Data</button>
            </div>
        </div>
        <hr />
        <div className="data-form__show">
            <div className="data-form__show-tag">
                <h1 className='gradient__text'>Your Data</h1>
            </div>
            <div className="data-form__top">
                <div className="data-form__top-left">
                    <img src={prototype_photo} alt='User_Photo'/>
                </div>
                <div className="data-form__top-right">
                    <div className="data-form__top-right-labels">
                        <label className='gradient__text'>Name :</label>
                        <label className='gradient__text'>Father Name :</label>
                        <label className='gradient__text'>Register Number :</label>
                        <label className='gradient__text'>College :</label>
                        <label className='gradient__text'>Department :</label>
                        <label className='gradient__text'>Semester :</label>
                    </div>
                    <div className="data-form__top-right-inputs">
                        <input type="text" id='name' name='name' disabled/>
                        <input type="text" id='father_name' name='father_name' disabled/>
                        <input type="text" id='register_no' name='register_no' disabled/>
                        <input type="text" id='college_name' name='college_name' disabled/>
                        <input type="text" id='department' name='department' disabled/>
                        <input type="text" id='semester' name='semester' disabled/>
                    </div>
                </div>
            </div>
            <div className="data-form__middle">
                <table className='data-form__middle-table'>
                    <thead className='data-form__middle-table-head'>
                        <tr>
                            <th>Date</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody className='data-form__middle-table-body'>
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

export default ShowData
