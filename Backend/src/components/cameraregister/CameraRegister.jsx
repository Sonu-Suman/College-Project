import React from 'react'
import './cameraregister.css'


const CameraRegister = () => {

    const cameraRegister = () => {
        alert("Now Your camera successfully connected to system!!!!!!!");
    }

  return (
    <>
      <div className="camera_registration-form">
        <div className="camera_registration-form__top">
            <h1 className='gradient__text'>Register Camera</h1>
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
                    <input type="text" id='caroom' name='caroom'/>
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
