import React from 'react'
import './cta.css';

const CTA = () => {
  return (
    <div className="cta_main">
      <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      <input type='email' placeholder='Type Your Email...'/>
      <button type='submit' >Connect to Us</button>
    </div>
  )
}

export default CTA
