import React from 'react'
import './css/skills.css';

const Skills = () => {
  const logoSlider = (
    <div className="logos-slider">
          <img src="assets/html5.png" alt="html5-logo" />
          <img src="assets/css3.png" alt="css3-logo" />
          <img src="assets/js.png" alt="js-logo" />
          <img src="assets/react-logo.png" alt="react-logo"/>
          <img src="assets/bootstrap-logo.png" alt="bootstrap-logo" />
          <img src="assets/git-logo.png" alt="git-logo" />
          <img src="assets/github-logo.png" alt="github-logo" />
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