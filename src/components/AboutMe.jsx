/* eslint-disable */
import React from "react";

const AboutMe = () => {
  return (
    <section className='container py-5'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-2'>
          <img
            src='/fatma.jpg'
            alt='About Me'
            className='rounded-circle mw-100  '
          />
        </div>
        <div className='col-8  ms-5'>
          <h2 style={{ fontSize: "4rem" }}>About Me</h2>
          <p>
            I'm a Front-End Web Developer, and I build many responsive web
            applications. i'm a quick learner and cooperative person. i'm
            passionate about learning new tools and technologies.my goal is to
            be a better developer
          </p>

          <a
            href='/src/assets/FatmaWafy.pdf'
            download
            className='btn custom-btn'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
