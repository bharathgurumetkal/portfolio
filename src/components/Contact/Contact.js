import React from 'react'
import contact from '../../assets/contact.png'
import { FaArrowRight } from "react-icons/fa6";

function Contact() {
  return (
    <div id='contact-me' className='' >
        <h2 className='my-4 text-center text-white'><span className='text-danger'>Connect</span> with Me</h2>
        <div className='m-5 d-flex justify-content-evenly'>
            <div className='form-section w-50 border p-3 rounded-3'>
                <form className='mt-5'>
                    <p className='text-white fs-6'>For questions or collaborations, please complete the form</p>

                    <input type="text" name="name" id="name" className='form-control mb-3 ' placeholder='Name'  />
                    <input type="email" name="email" id="email" className='form-control   mb-3 ' placeholder='Email' />
                    <textarea rows="5" className='form-control ' placeholder='Write your message here...'></textarea>
                    <button className="btn btn-danger rounded-pill w-50 mx-auto d-block mt-4 fs-6">Send message <FaArrowRight className='fs-6 ' /></button>
                </form>

            </div>
            <div className='w-50'>
                <img src={contact} alt="" className=' w-75 '  style={{paddingLeft:"100px",marginTop:"-120px"}}  />
            </div>

        </div>
    </div>
  )
}

export default Contact