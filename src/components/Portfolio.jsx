/* eslint-disable */
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      imgSrc: "../../public/1.png",
      alt: "Project 1",
      link: "https://fatma-7pcrkuamw-fatmawafy.vercel.app/",
    },
    {
      imgSrc: "../../public/2.png",
      alt: "Project 2",
      link: "https://fatmawafy.github.io/SpaceX/",
    },
    {
      imgSrc: "../../public/3.png",
      alt: "Project 3",
      link: "https://fatmawafy.github.io/Weather-App/",
    },
    {
      imgSrc: "../../public/4.png",
      alt: "Project 4",
      link: "https://fatmawafy.github.io/Spotify/",
    },
    {
      imgSrc: "../../public/5.png",
      alt: "Project 5",
      link: "https://fatmawafy.github.io/FoodHut/",
    },
    {
      imgSrc: "../../public/6.png",
      alt: "Project 6",
      link: "https://fatmawafy.github.io/Build/",
    },
  ];

  return (
    <section className='py-5 text-center'>
      <div className='container'>
        <div>
          <h2 className='text-center mb-4' style={{ fontSize: "5rem" }}>
            Portfolio
          </h2>

          <div className='row g-4'>
            {projects.map((project) => (
              <div className='col-md-4'>
                <div className='project'>
                  <div className='image-box position-relative'>
                    <img src={project.imgSrc} className='rounded-xl' />
                    <div className='overlay'>
                      <a
                        href={project.link}
                        target='_blank'
                        className='overlay-link'
                      >
                        <i
                          className='fas fa-link'
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
