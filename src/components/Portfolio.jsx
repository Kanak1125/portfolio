import React from 'react'
import './css/portfolio.css';
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  const projects = [
  {
    imgUrl: 'online-store-ss.png',
    title: 'Online store',
    url: 'https://github.com/Kanak1125/online-store'
  },
  {
    imgUrl: 'language_learning_app_ss.png',
    title: 'Language Learning Flashcard App',
    url: 'https://github.com/Kanak1125/language-learning-flashcards-app'
  },
  {
    imgUrl: 'scholaract ss.png',
    title: 'Scholaract (Learning Management System)',
    url: 'https://github.com/Kanak1125/Scholaract'
  },
  {
    imgUrl: 'photo-editor-app-ss.jpg',
    title: 'Photo editor app',
    url: 'https://github.com/Kanak1125/photo-editor-app'
  },
  {
    imgUrl: 'space_invaders_ss.jpg',
    title: 'Space Invader',
    url: 'https://github.com/Kanak1125/space-invaders'
  },
  {
    imgUrl: 'tenzies-ss.jpg',
    title: 'Tenzies',
    url: 'https://github.com/Kanak1125/tenzies-game'
  },
  ]

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