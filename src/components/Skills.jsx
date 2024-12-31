/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const progressData = [
    { skill: "HTML", value: 90 },
    { skill: "CSS", value: 85 },
    { skill: "JavaScript", value: 75 },
    { skill: "React", value: 70 },
    { skill: "Node.js", value: 60 },
  ];

  return (
    <section className='py-5' style={{ backgroundColor: "#f0f0f0 " }}>
      <div className='container'>
        <h2 className='text-center mb-4' style={{ fontSize: "5rem" }}>
          Skills
        </h2>

        <div className='row'>
          <div className='col-md-12'>
            <div className='progress-bars'>
              {progressData.map((item) => (
                <div className='mb-4'>
                  <span style={{ fontWeight: "bold" }}>{item.skill}</span>
                  <div className='progress' style={{ height: "20px" }}>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: "#597e73",
                      }}
                    >
                      {item.value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
