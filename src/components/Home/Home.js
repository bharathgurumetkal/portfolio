import React from 'react'
import profile_img from '../../assets/profile.jpg'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import './Home.css'
import About from '../About/About';
function Home() {
  return (
    <div className=' px-4 ' style={{paddingTop:"150px",paddingBottom:"130px"}} > 
    <div className='hero'>

        <div className='intro-section container mt-4'>
            <h3 className='text-white'>Hi,I'm </h3>
            <h1 className='name fw-bold'>Gurumetkal Bharath Simha Reddy</h1>
            <div class="name-container">
    <div class="fw-bold fs-1 text-container ">
      <p class="passion text-wrap">Full Stack Developer | AI Enthusiast</p>
    </div>
  </div>
  <div className='d-flex'>
    <button className="btn fw-medium linkedin me-5"><a href="https://www.linkedin.com/in/bharath-simha-reddy-gurumetkal-0785942b3" className='text-decoration-none'>LinkedIn</a> <RiLinkedinBoxFill className='fs-5' /></button>
    <button className="btn resume fw-normal"><a href="https://drive.google.com/file/d/1Tvzm0VctIhdD3U9E6jzEpKwJOyt7Zwzt/view?usp=sharing" className='text-white text-decoration-none'>My Resume</a> <IoDocumentText className='fs-5 '/></button>
  </div>
  
            
        </div>
        <div className='profile-pic pe-lg-5'>
            <img src={profile_img} className=' rounded-circle border border-white p-2'  alt="" />
            
        </div>
        </div>
      
    </div>
  )
}

export default Home