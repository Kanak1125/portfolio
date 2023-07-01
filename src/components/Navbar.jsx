import React, {useState, useEffect} from 'react'
import './css/navbar.css'
import { useMediaQuery } from 'react-responsive';   // react libary react-responsive...

const Navbar = () => {
    const [isHamActive, setIsHamActive] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 834}); // setting the initial value of useMediaQuery hook to maxWidth: 834...
    
    function handleHamMenu() {
        setIsHamActive(prevState => !prevState);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => setIsHamActive(false));
    }, []); // close the hamburger menu when the scroll event is encountered...

    const hamMenuBar = (
        <div className={`hamburger-icon ${isHamActive ? 'active' : ''}`} onClick={handleHamMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    )

    const navLinks = (
        <ul className={`nav-links`}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#works'>Works</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    )

    document.body.style.overflow = isHamActive ? 'hidden' : '';

  return (
    <nav>
        <p className='logo'>KA<span>N</span>AK</p>
        {hamMenuBar}
        {isMobile ? 
            isHamActive && navLinks
            :
            navLinks
        }
    </nav>
  )
}

export default Navbar;