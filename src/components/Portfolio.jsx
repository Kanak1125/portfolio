import React from 'react'
import './css/portfolio.css';
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  const projects = [{
    imgUrl: 'photo-editor-app-ss.jpg',
    title: 'Photo editor app',
    url: 'https://github.com/Kanak1125/photo-editor-app'
  },
  {
    imgUrl: 'tenzies-ss.jpg',
    title: 'Tenzies',
    url: 'https://github.com/Kanak1125/tenzies-game'
  },
  {
    imgUrl: 'personal_site_ss.jpg',
    title: 'Personal site',
    url: 'https://github.com/Kanak1125/personal-website'
  },
  {
    imgUrl: 'space_invaders_ss.jpg',
    title: 'Space Invader',
    url: 'https://github.com/Kanak1125/space-invaders'
  },
  {
    imgUrl: 'pixel_art_grid_ss.jpg',
    title: 'Pixel Art grid',
    url: 'https://github.com/Kanak1125/my_JS_app_projects/tree/main/my-web-projects/Pixel%20Art%20Grid'
  },
  {
    imgUrl: 'snake_game_ss.jpg',
    title: 'Snake game',
    url: 'https://github.com/Kanak1125/snake-game'
  }]

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