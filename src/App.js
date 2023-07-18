import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingNav from './components/FloatingNav.jsx';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import useFadeIn from './components/hooks/useFadeIn';

function App() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  // const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) setShowFloatingNav(true);
      else setShowFloatingNav(false);
    }
    window.addEventListener('scroll', handleScroll);  // listen to the listener everytime the scroll event occurs...
    // useEffect will only run once...

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useFadeIn(ref, 500);

  return (
    <div /*ref={ref}*/ className='container'>
      <Navbar />
      <Hero />
      {showFloatingNav && <FloatingNav />}
      <About/>
      <Skills />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;