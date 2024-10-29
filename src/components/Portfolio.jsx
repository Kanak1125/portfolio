import React from 'react'
import './css/portfolio.css';
import PortfolioCard from './PortfolioCard';

import projects from '../constants/projects';

const Portfolio = () => {
  return (
    <section id='works'>
      <p className="super-title">My Recent Work</p>
      <p className="section-title">Portfolio</p>
      <div className="card-container project-card-container">
        {projects.map(project => (
        <PortfolioCard 
          key={project.title}
          imgUrl={project.imgUrl}
          title={project.title}
          url={project.url}
        />
        ))}
      </div>
    </section>
  )
}

export default Portfolio