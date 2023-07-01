import React from 'react'
import './css/footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <p className='logo'>KA<span>N</span>AK</p>
      <div className="footer-links">
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#works'>Works</a></li>
          <li><a href='#contact'>Contact</a></li>
      </div>
      <small>© 2023 All rights reserved</small>
    </footer>
  )
}

export default Footer