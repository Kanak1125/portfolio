import React from 'react'
import './css/skills.css';

import skills from '../constants/skills';

const Skills = () => {
  const logoSlider = (
    <div className="logos-slider">
      {
        skills.map(item => (
          <img 
            key={item.title}
            src={`assets/${item.image}`} 
            alt={item.alt} 
            title={item.title}  
          />
        ))
      }
    </div>
  )
  return (
    <section id='skills'>
      <p className="super-title">My tools</p>
      <p className="section-title">Skills</p>
      <div className="logos-container">
        {logoSlider}
        {logoSlider}
      </div>
    </section>
  )
}

export default Skills