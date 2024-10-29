import {useRef} from 'react'
import AboutCard from './AboutCard'
import './css/about.css'
// import useFadeIn from './hooks/useFadeIn';
import { faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';
import useIntersectionObserver from './hooks/useIntersectionObserver';

const About = () => {
  const card = [{
    icon: faBriefcase,
    title: "Experience",
    details: "6 months"
  },
  {
    icon: faUsers,
    title: "Clients",
    details: "2"
  },
  {
    icon: faBriefcase,
    title: "Projects",
    details: "20+ completed"
  }]

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  // useFadeIn(ref, 1000);
  useIntersectionObserver(ref1);
  useIntersectionObserver(ref2);

  return (
    <section id="about">
      <p className="super-title">Get to know</p>
      <p className="section-title">About me</p>
      <div className="about-me-container">
        <div className="img-container-2" ref={ref1}>
          <img src='assets/MAin_img.jpg' alt="" />
        </div>
        <div className="main-container" ref={ref2}>
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
            I'm a passionate web developer with a keen interest in CI/CD workflows, currently exploring GitHub Actions to streamline development and deployment processes.
          </div>
          <a href='#contact' className='btn talk-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About