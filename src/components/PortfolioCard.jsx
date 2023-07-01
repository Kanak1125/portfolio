import React from 'react'

const PortfolioCard = (props) => {
    const {imgUrl, title, url} = props;
  return (
    <div className='project-card'>
        <div className="project-img-container">
            <img src={`assets/${imgUrl}`} alt="" />
        </div>
        <div className="about-project">
          <h5>{title}</h5>
          <a href={url} className='btn dwnld-btn' target='_blank' rel="noreferrer">Github</a>
        </div>
    </div>
  )
}

export default PortfolioCard