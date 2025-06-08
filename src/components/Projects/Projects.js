import React, { useState } from 'react';
import './Projects.css'
import blog from '../../assets/blog.avif'
import thisability from '../../assets/thisability.png'
import product from '../../assets/product.png'
import redux from '../../assets/Redux.png'
import categorizer from '../../assets/categorizer.png'

function Projects() {
  return (
    <div id='projects'>
      <h2 className='text-white text-center my-5'>
        My <span className='text-danger'>Projects</span>
      </h2>
      <div className='container'>
        <div className="row">
          <div className="col-md-4 my-3">
            <div className="box bg-dark">
              <div className="project-title">
                <h3 className='text-white fs-5 fw-bold'>Blog Application</h3>
              </div>
              <img src={blog} className='' style={{height:"300px"}} alt="Blog Application" />
              <div className="overlay">
              <a
                  href="https://github.com/bharathgurumetkal/blogapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger w-50 rounded-pill mx-auto d-block mb-2"
                >
                  GitHub
                </a>
                <p className='text-white'>
                Developed a website for BLOG by using MERN Stack. It serves as platform for sharing  information,opinions,expertise on various topics and engagement through comments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="box bg-dark">
              <div className="project-title">
                <h3 className='text-white fs-5 fw-bold'>Thisability</h3>
              </div>
              <img src={thisability} style={{height:"300px"}} alt="Blog Application" />
              <div className="overlay">
              <a
                  href="https://github.com/bharathgurumetkal/thisability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger w-50 rounded-pill mx-auto d-block mb-2"
                >
                  GitHub
                </a>
                <p className='text-white'>
                An AI-powered platform that provides YouTube video summaries, transcripts, and bullet points, with a chatbot for interactive Q&A. It also offers text-to-speech summaries, ensuring accessibility for disabled users.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="box bg-dark">
              <div className="project-title">
                <h3 className='text-white fs-5 fw-bold'>Automated Document Categorizer</h3>
              </div>
              <img src={categorizer} style={{height:"300px"}} alt="" />
              <div className="overlay">
              <a
                  href="https://github.com/bharathgurumetkal/frontend-mini-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger w-50 rounded-pill mx-auto d-block mb-2"
                >
                  GitHub
                </a>
                <p className='text-white'>
                Built a responsive React product display site with API integration, search feature, and user-friendly UI.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="box bg-dark">
              <div className="project-title">
                <h3 className='text-white fs-5 fw-bold'>Product Display Website</h3>
              </div>
              <img src={product} style={{height:"300px"}} alt="Blog Application" />
              <div className="overlay">
              <a
                  href="https://github.com/bharathgurumetkal/frontend-mini-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger w-50 rounded-pill mx-auto d-block mb-2"
                >
                  GitHub
                </a>
                <p className='text-white'>
                Built a responsive React product display site with API integration, search feature, and user-friendly UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
