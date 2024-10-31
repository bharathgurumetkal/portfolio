import React from 'react'
import mongodb from '../../assets/mongodb.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.webp'
import node from '../../assets/nodejs.png'
import c from '../../assets/c.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import bootstrap from '../../assets/bootstrap.png'
import flask from '../../assets/flask.png'
import './Skills.css'
function Skills() {
  return (
    <div id="skills">
        <h2 className='text-white text-center mb-3'>My Work <span className='text-danger'>Skills</span></h2>
        <div className='d-flex container bg-white  p-5 rounded-4  '>
            <div className='row'>
            <div className=' col-md-4'>
                    <div className="card w-75    rounded-4  p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={c} alt="" />
                        <h3 className='text-center'>C</h3>
                    </div>

                </div>
                <div className=' col-md-4 '>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={python} alt="" />
                        <h3 className='text-center'>Python</h3>
                    </div>

                </div>
                <div className=' col-md-4'>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={html} alt="" />
                        <h3 className='text-center'>HTML</h3>
                    </div>

                </div>
                <div className=' col-md-4 my-3'>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={css} alt="" />
                        <h3 className='text-center'>CSS</h3>
                    </div>

                </div>
                <div className=' col-md-4 my-3'>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={js} alt="" />
                        <h3 className='text-center'>JavaScript</h3>
                    </div>

                </div>
                <div className=' col-md-4 my-3'>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={node} alt="" />
                        <h3 className='text-center'>NodeJS</h3>
                    </div>

                </div>
                <div className=' col-md-4 my-3'>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={bootstrap} alt="" />
                        <h3 className='text-center'>Bootstrap</h3>
                    </div>

                </div>
                <div className=' col-md-4 my-3'>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-75 h-75 mx-auto d-block' src={react} alt="" />
                        <h3 className='text-center '>React</h3>
                    </div>

                </div>
                <div className=' col-md-4 my-3'>
                    <div className="card w-75 h-100 rounded-4 p-2 shadow-lg bg-dark text-white">
                        <img className='w-100 h-75 mx-auto d-block' src={mongodb} alt="" />
                        <h3 className='text-center pt-4'>MongoDB</h3>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills