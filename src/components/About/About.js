import React from "react";
import { FaSchool } from "react-icons/fa6";
import { BiSolidInstitution } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="mx-auto details">
        <h2 className="text-white text-center mb-5">
          About <span className="text-danger">Me</span>{" "}
        </h2>
        <p className=" w-75  mb-2 text-white fs-5">
          I'm <b>Gurumetkal Bharath Simha Reddy</b>,a passionate MERN Stack
          developer leveraging AI to craft innovative and impactful
          solutions.with expertise in teamwork and project building, I thrive in
          collaborative environments, driving creativity and technical
          excellence. Committed to continuous learning, I stay ahead of industry
          trends to deliver high-quality results that address real-world
          challenges. Let’s connect and create transformative
          solutions together!
        </p>
        <div className="education px-5 mt-4">
          <div className="row ">
            <div className="col-md-4 mb-2">
              <div className="card w-75 h-100  education-card">
                <div className="card-body">
                  <div className="text-center">
                    <FaSchool className="icon fs-1 me-2 "  />
                  </div>
                  <div>
                    <h6 className="fw-bold text-center">
                      Dr KKR'S Gowtham Concept School
                    </h6>
                  </div>
                  <p>
                    <span className="fw-medium">Passed out: </span> 2020
                  </p>
                  <p>
                    <span className=" fw-semibold">GPA: </span> 10
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card w-75 h-100 education-card">
                <div className="card-body">
                  <div className="text-center">
                    <BiSolidInstitution className="fs-1 me-2 icon" />
                  </div>
                  <div>
                    <h6 className="fw-bold text-center">
                      Sri Chaitanya College
                    </h6>
                  </div>
                  <p>
                    <span className="fw-medium">Passed out: </span> 2022
                  </p>
                  <p className="mb-4">
                    <span className=" fw-semibold">Percentage: </span>97
                  </p>
          
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card w-75 education-card">
                <div className="card-body">
                  <div className="text-center">
                    <IoMdSchool className="fs-1 me-2 icon" />
                  </div>
                  <div>
                    <h6 className="fw-bold text-center">
                      VNR Vignana Jyothi Institute of Engineering and Technology
                    </h6>
                  </div>
                  <p>2022-<span className="fw-semibold">Present</span></p>
                  <p>
                    <span className=" fw-semibold">GPA: </span> 8.69
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
