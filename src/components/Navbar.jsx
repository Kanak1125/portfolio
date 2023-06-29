import React, {useState} from 'react'
import './css/navbar.css'
import { useMediaQuery } from 'react-responsive';   // react libary react-responsive...

const Navbar = () => {
    const [isHamActive, setIsHamActive] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 834}); // setting the initial value of useMediaQuery hook to maxWidth: 834...
    console.log('rendered')
    function handleHamMenu() {
        setIsHamActive(prevState => !prevState);
    }

    const hamMenuBar = (
        <div className={`hamburger-icon ${isHamActive ? 'active' : ''}`} onClick={handleHamMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    )

    const navLinks = (
        <ul className='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Works</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    )
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