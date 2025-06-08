import React from 'react';
import contact from '../../assets/contact.png';
import { FaArrowRight } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contact-me" className="container">
      <h2 className="mt-4 text-center text-white mb-4">
        <span className="text-danger">Connect</span> with Me
      </h2>

      <div className="row p- justify-content-center align-items-center">
        {/* Form Section */}
        <div className="col-12 col-md-6 border p-4 rounded-3 bg-dark">
          <form className="mt-3">
            <p className="text-white text-center fs-6">
              For questions or collaborations, please complete the form
            </p>

            <input
              type="text"
              name="name"
              id="name"
              className="form-control mb-3"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mb-3"
              placeholder="Email"
            />
            <textarea
              rows="5"
              className="form-control"
              placeholder="Write your message here..."
            ></textarea>

            <button className="btn btn-danger rounded-pill w-50 mx-auto d-block mt-4 fs-6">
              Send <FaArrowRight className="fs-6" />
            </button>
          </form>
        </div>

        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
          <img
            src={contact}
            alt="Contact"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
