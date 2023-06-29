import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      {/* <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;