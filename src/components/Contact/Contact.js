import React from 'react'
import contact from '../../assets/contact.png'

function Contact() {
  return (
    <div id='contact-me' className='' >
        <h2 className='my-4 text-center text-white'><span className='text-danger'>Connect</span> with Me</h2>
        <div className='m-5 d-flex justify-content-evenly'>
            <div className='form-section w-50'>
                <form className='mt-5'>
                    <p className='text-white fs-5'>For questions or collaborations, please complete the form</p>
                    For questions or collaborations, please complete the form
                    <input type="text" name="name" id="name" className='form-control mb-3 ' placeholder='Name'  />
                    <input type="email" name="email" id="email" className='form-control   mb-3 ' placeholder='Email' />
                    <textarea rows="5" className='form-control ' placeholder='Write your message here...'></textarea>
                    <button className="btn btn-danger w-75 mx-auto d-block mt-4">Send message</button>
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