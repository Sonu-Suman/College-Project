import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='trader_footer'>
      <div className="trader_footer_section">
        <div className="trader_footer_logo">
          <h1 className='gradient__text'>AS</h1>
          <p className='gradient__text'>Technology</p>
        </div>
        <div className="trader_footer_section_for_many">
          <div className="trader_footer_links">
            <h2>Links</h2>
            <div className="trader_footer_links_section">
              <p><a href='#recent_blog'>Blogs</a></p>
              <p><a href='#top_blog'>Top Blog</a></p>
              <p><a href='#visited_blog'>Recent Blogs</a></p>
              <p><a href='#visited_blog'>Social Media</a></p>
            </div>
          </div>
          <div className="trader_footer_company">
            <h2>Company</h2>
            <div className="trader_footer_company_section">
              <p><a href='#top_partners'>Term & Conditions</a></p>
              <p><a href='#priority'>Privacy Policy</a></p>
              <p><a href='#c'>Contact</a></p>
            </div>
          </div>
          <div className="trader_footer_get_in_touch">
            <h2>Get In Touch</h2>
            <div className="trader_footer_get_in_touch_section">
              <p>Vrindavan, Uttar Pradesh</p>
              <p>62042-84xxx</p>
              <p>sumankumar1949@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="trader_footer_copyright">
        <p>@2024 AS Technology. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
