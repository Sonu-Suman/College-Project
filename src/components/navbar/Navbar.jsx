import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import idea from '../../assets/idea.png'
import { Link } from "react-router-dom"


const Menu = () => (
                      <>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to='../service/Service'>Services</Link></p>
                        <p><Link to='/'>Learn</Link></p>
                        <p><Link to='/'>Case studies</Link></p>
                      </>
                    )


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='trader__navbar'>
      <div className="trader__navbar-links">
        <div className="trader__navbar-links_logo">
          <img src={idea} alt="logo" />
        </div>
        <div className="trader__navbar-links_container">
          <p><Link to="/" title='home'>Home</Link></p>
          <p><Link to='../Service' title='service'>Services</Link></p>
          <p><Link to='/'>Learn</Link></p>
          <p><Link to='/'>Case studies</Link></p>
        </div>
      </div>
      <div className="trader__navbar-sign">
        <p><Link to='../LogIn'>Sign In</Link></p>
        <p><Link to='../SignUp'>Sign Up</Link></p>
        {/* <button onClick={signUp} type='button'>Sign Up</button> */}
      </div>
      <div className="trader__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/> 
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/> 
        }
        {toggleMenu && (
          <div className='trader__navbar-menu_container scale-up-center'>
            <div className="trader__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="trader__navbar-menu_container-links-sign">
              <p><Link to='../login/LogIn'>Sign In</Link></p>
              <p><Link to='../signup/SignUp'>Sign Up</Link></p>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default Navbar;
