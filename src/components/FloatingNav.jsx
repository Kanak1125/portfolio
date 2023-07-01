import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './css/floatingNav.css';

const FloatingNav = () => {
  const [activeClass, setActiveClass] = useState('#home');

  return (
    <div className='floating-nav'>
      <a 
        href="#home" 
        className={activeClass === '#home' ? 'active' : ''} 
        onClick={() => setActiveClass('#home')}
      >
        <FontAwesomeIcon icon={faHome} className='custom-icon'/>
      </a>
      <a 
        href="#about" 
        className={activeClass === "#about" ? 'active' : ''} 
        onClick={() => setActiveClass('#about')}
      >
        <FontAwesomeIcon icon={faUser} className='custom-icon'/>
      </a>
      <a 
        href="#works" 
        className={activeClass  === '#works' ? 'active' : ''} 
        onClick={() => setActiveClass('#works')}
      >
        <FontAwesomeIcon icon={faBriefcase} className='custom-icon'/>
      </a>
      <a 
        href="#contact" 
        className={activeClass === '#contact' ? 'active' : ''}
        onClick={() => setActiveClass('#contact')}
      >
        <FontAwesomeIcon icon={faEnvelope} className='custom-icon'/>
      </a>      
    </div>
  )
}

export default FloatingNav