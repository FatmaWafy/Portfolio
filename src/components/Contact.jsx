/* eslint-disable */
import React from "react";

const Contact = () => {
  return (
    <section className='py-3' style={{ backgroundColor: "#f0f0f0 " }}>
      <div className='container text-center'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-4'>
            <div className='d-flex align-items-center'>
              <i className='icon fas fa-envelope   me-3'></i>
              <span>fatmaa1601@gmail.com</span>
            </div>
            <div className='d-flex align-items-center'>
              <i className='icon fas fa-phone  me-3'></i>
              <span>+20 1114716565</span>
            </div>
          </div>
          <div className='col-md-4'>
            <button className='btn custom-btn'>Contact Me</button>
          </div>
          <div className='col-md-4'>
            <div className='social-icons mt-3'>
              <a href='https://www.facebook.com/fatmaa1601/' className='me-3'>
                <i className='icon fab fa-facebook fa-2x'></i>
              </a>
              <a href='https://x.com/fatmaa1601/' className='me-3'>
                <i className='icon fab fa-twitter fa-2x'></i>
              </a>
              <a href='https://www.linkedin.com/in/fatmawafy/' className='me-3'>
                <i className='icon fab fa-linkedin fa-2x'></i>
              </a>
              <a href='https://github.com/FatmaWafy'>
                <i className='icon fab fa-github fa-2x'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
