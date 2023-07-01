import React from 'react'
import AboutCard from './AboutCard'
import './css/about.css'

import { faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const card = [{
    icon: faBriefcase,
    title: "Experience",
    details: "Lorem epsum"
  },
  {
    icon: faUsers,
    title: "Clients",
    details: "Lorem epsum"
  },
  {
    icon: faBriefcase,
    title: "Projects",
    details: "20+ completed"
  }]

  return (
    <section id="about">
      <p className="super-title">Get to know</p>
      <p className="section-title">About me</p>
      <div className="about-me-container">
        <div className="img-container-2">
          <img src='assets/MAin_img.jpg' alt="" />
        </div>
        <div className="main-container">
          <div className="card-container">
            {card.map(item => (
            <AboutCard 
              key = {item.title}
              icon={item.icon}
              title={item.title}  
              details={item.details}
            />
            ))}
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia dolore quaerat repellat commodi maxime quam excepturi illum pariatur consequuntur quis vitae aspernatur sint dignissimos nemo, quisquam voluptas reiciendis ut.
          </div>
          <a href='#contact' className='btn talk-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About