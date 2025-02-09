import React from "react";
import './About.css';

function About() {
    return (
      <><section id='about'>
        <h2 id="aboutheader">About</h2>
        <div className="aboutme-container">
              <p>For the past 4 years, I have been apart of the technical community where my passion to create and learn has only continued to grow. Throughout this time, I have become a skilled and driven developer looking to create experiences to improve people's lives and provide entertainment.</p>
        </div>
        <h2 id="skillsheader">Other Skills</h2>
        <div className="skills-container skills">
            <ul>
                <li>Full-time cat parent</li>
                <li>Part-time farmer</li>
                <li>3-D Printer enthusiast</li>
            </ul>
        </div>
      </section></>
    );
  }
  
  export default About;