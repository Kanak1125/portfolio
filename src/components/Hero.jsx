import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './css/hero.css';

const Hero = () => {

  return (
    <main>
      <p>Hello I'm</p>
      <h1>Kanak Shakya</h1>
      <p>Front end Web developer</p>
      <div className="btn-container">
        <a href={''} className='btn dwnld-btn'>Download CV</a>
        <a href='' className='btn talk-btn'>Let's Talk</a>
      </div>
      <div className="sub-section"> 
        <div className="social-media-links">
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div> 
        <div className="img-container">
          {/* <img src= {'/assets/MAin_img.jpg'} alt="my_img"/> */}
        </div>
        <a href="#" className='scroll-down'>Scroll down</a>
      </div>
    </main>
  )
}

export default Hero