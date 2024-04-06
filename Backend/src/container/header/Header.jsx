import React from 'react'
import './header.css';
import prototype_photo from '../../assets/BestFacialRecognition.jpg'


const Header = () => {
  return (
    <div className="main_header_tag">
      <div className="project_header_logo_name">
        <h1>AS</h1>
        <p className='gradient__text'>Technology</p>
        <p className='gradient__text'>______________</p>
      </div>
      <div className="project__header-home-container" >
        <h1 >Developed by GEC Jamui Coder,<br />powered by Artificial Intelligence</h1>
        <p>We’ve developed Automated attendence system, 
          an AI that recognize your face and made your entry and exit attendence in database. 
          Together with team we’re releasing the first version of this system.
        </p>
        <p>Coder has many more capabilities, 
          which developers can explore—and build into their own apps—when we release Coder through our API later this summer.
        </p>
        <a href="/" target="_blank" >Learn more about Project</a>
      </div>
      <img src={prototype_photo} alt='face-recognition-prototype' />
      <div className="project__header-secondary-container">
        <h1>Know more <br/>About this <br/>Breakthrough Technology!</h1>
      </div>
    </div>
  )
}

export default Header
