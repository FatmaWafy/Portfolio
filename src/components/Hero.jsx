/* eslint-disable */
import React from "react";
const Hero = () => {
  return (
    <section
      className='hero-section position-relative  d-flex justify-content-center align-items-center'
      style={{ backgroundColor: "#333", padding: "50px 0" }}
    >
      <div className='overlay'></div>

      <div
        className='container text-center align-middle'
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1 className='mb-3 ' style={{ fontSize: "5rem" }}>
          Fatma Wafy
        </h1>
        <p className='lead mb-4' style={{ fontSize: "2rem" }}>
          Full-Stack Developer
        </p>
        <button className='btn custom-btn'>Contact Me</button>
      </div>
    </section>
  );
};

export default Hero;
