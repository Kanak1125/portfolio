import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './css/hero.css';

const Hero = () => {

  return (
    <main id='home'>
      <p>Hello I'm</p>
      <h1>Kanak Shakya</h1>
      <p>Front end Web developer</p>
      <div className="btn-container">
        <a href={'/assets/Kanak-Shakya-CV-main.pdf'} className='btn dwnld-btn' download>Download CV</a>
        <a href='#contact' className='btn talk-btn'>Let's Talk</a>
      </div>
      <div className="sub-section"> 
        <div className="social-media-links">
          <a href="https://github.com/Kanak1125" target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/kanak-shakya-41a464207/" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div> 
        <div className="img-container">
          {/* <img src= {'/assets/MAin_img.jpg'} alt="my_img"/> */}
        </div>
        <a href="#footer" className='scroll-down'>Scroll down</a>
      </div>
    </main>
  )
}

export default Hero