import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll'
import './NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"rgb(24, 31, 40)"}}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-5 text-white" href="#">
          Bharath Simha Reddy
        </a>
        
        {/* Custom hamburger menu */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon-custom ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item">
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={300} 
                activeClass="active" 
                className="nav-link text-white fs-5 px-3 py-2"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={300} 
                activeClass="active" 
                className="nav-link text-white fs-5 px-3 py-2"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li> 
            <li className="nav-item">
              <Link 
                to="skills" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={300} 
                activeClass="active" 
                className="nav-link text-white fs-5 px-3 py-2"
                onClick={closeNavbar}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={300} 
                activeClass="active" 
                className="nav-link text-white fs-5 px-3 py-2"
                onClick={closeNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="contact-me" 
                spy={true} 
                smooth={true} 
                offset={-190} 
                duration={300} 
                className="nav-link text-white fs-5 px-3 py-2"
                onClick={closeNavbar}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;