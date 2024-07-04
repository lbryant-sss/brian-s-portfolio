import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the icon from react-icons
import './Body.scss'; // Importing the SCSS file for styling

const Body = () => {
  return (
    <section className='body-section-1'>
      <div className="container">
        <div className="hero-container">
          <div className="hero">
            <h2 className='typing-effect'>
              BRIAN MUNGAI
            </h2>
            <p className='catchphrase'>
              Fullstack web Developer, One line of Code at a time
            </p>
          </div>
        </div>
        <div className="skills" id='skills'>
          <div className="skills-intro">
            <h3>What I do</h3>
            <ul>
              <li>
                <span>HTML CSS Javascript</span><br />
                <span>90%</span>
              </li>
              <li>
                <span>Git</span><br />
                <span>70%</span>
              </li>
              <li>
                <span>Python Git</span>
                <br />
                <span>80%</span>
              </li>
              <li>
                <span>PHP</span><br />
                <span>70%</span>
              </li>
              <li>
                <span>Google Cloud</span><br />
                <span>73%</span>
              </li>
              <li>
                <span>Wordpress</span><br />
                <span>70%</span>
              </li>
              <li>
                <span>Webflow</span><br />
                <span>70%</span>
              </li>
            </ul>
          </div>
          <div className="about">
              <h3>About me</h3>
              <ul>
                <li className='status'>
                  <span>FULLSTACK SOFTWARE DEVELOPER</span>
                  <p>
                  Brian Mungai is a dedicated Fullstack Developer with a passion for crafting innovative and efficient web solutions. With a strong foundation in both front-end and back-end technologies, Brian excels in creating seamless user experiences and robust server-side functionalities. Proficient in modern frameworks and languages such as React, Django and Google Cloud, he is committed to continuous learning and staying up-to-date with the latest industry trends. Whether developing interactive interfaces or optimizing database queries, Brian brings a meticulous and enthusiastic approach to every project, driving success and delivering high-quality results.
                  </p>
                </li>
              </ul>
          </div>
        </div>
        <div className="projects" id='projects'>
          <div className="head">
            <h3>Projects</h3>
          </div>
          <div className="project-cards">
            <div className="card">
              <a href="https://github.com/lbryant-sss/keyline">
                <span>keyline | Data visualisaion</span><br />
                <img src="https://raw.githubusercontent.com/lbryant-sss/brian-s-portfolio/main/keyline.PNG" alt="" />
              </a>
              <p>
              Keyline is a web application project integrating D3.js for data visualization. It features separate components for UI, backend, and frontend, with primary development in HTML, CSS, Python, and JavaScript. The repository includes test scripts and dependency management files. Still in progress.
              </p>
            </div>
            <div className="card">
              <a href="https://github.com/lbryant-sss/brian-s-portfolio">
                <span>This Portfolio</span><br />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_EajeGlM1znJBhsNIeFB5Vq7aWQlhWIptH6-LcGZtI1n14llou_kLHOXHvHPtFj3D5U&usqp=CAU" alt="" />
                <p>
                A modern portfolio showcasing fullstack development skills, built with React for dynamic and responsive design. Hosted on GitHub, it demonstrates proficiency in web development and version control.
                </p>
              </a>
            </div>
            <div className="card">
              <a href="https://github.com/lbryant-sss/Google-Cloud-Storage-to-Bigquery-to-Lookup-Studio">
                <span>Google Cloud Bigquery</span><br />
                <img src="https://raw.githubusercontent.com/lbryant-sss/brian-s-portfolio/main/bigquery.PNG" alt="" />
                <p>
                This project automates the analysis of NOAA air temperature data using Google Cloud Platform services. Data is stored in Google Cloud Storage, processed with BigQuery, and visualized in Google Data Studio, providing an interactive dashboard for temperature trend analysis.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
