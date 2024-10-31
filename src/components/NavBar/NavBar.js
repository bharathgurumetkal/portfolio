import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll'
import './NavBar.css'


const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg fixed-top " style={{backgroundColor:"rgb(24, 31, 40)"}}>
      <div className="container-fluid text-white">
        <a className="navbar-brand  fw-bold fs-5  text-white" >
          Bharath Simha Reddy
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-white gap-3 ">
           
            <li className="nav-item  ">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={300} activeClass="active" className="btn nav-link  text-white  fs-5"  >
                Home
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to="about" spy={true} smooth={true} offset={-100} duration={300} activeClass="active" className="btn nav-link   text-white fs-5" >
                About
              </Link>
            </li> 
            <li className="nav-item  ">
              <Link to="skills" spy={true} smooth={true} offset={-100} duration={300} activeClass="active" className="btn nav-link   text-white fs-5" >
                Skills
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={300} activeClass="active" className="btn nav-link  text-white  fs-5"  >
                Projects
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to="contact-me" spy={true} smooth={true} offset={-190} duration={300} className="btn nav-link  text-white  fs-5"  >
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
