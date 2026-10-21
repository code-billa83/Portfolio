import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="aboutSection">
   
      <div className="titleContainer">
        <h2 className="aboutTitle">About Me</h2>
        <div className="aboutUnderline"></div>
      </div>

      <div className="descriptionBox">
        <p>
          I'm <span className="highlightText">Shiv Mishra</span>, a passionate Full Stack Developer and Software Developer dedicated to building clean, scalable, and high-performance web applications. I specialize in modern web technologies and love creating digital solutions that are both user-friendly and efficient.
        </p>
        <p>
          My expertise spans across <span className="highlightText">frontend</span>, <span className="highlightText">backend</span>, <span className="highlightText">database development</span> and real-world application architecture. I enjoy learning new technologies, improving my skills, and crafting software that makes an impact.
        </p>
        <p>
          My goal is to grow as a professional developer and contribute to meaningful projects that enhance user experience and solve real problems.
        </p>
      </div>

      <div className="statsContainer">
        <div className="statCard">
          <div className="statNumber">50+</div>
          <div className="statLabel">Projects Completed</div>
        </div>

        <div className="statCard">
          <div className="statNumber">6</div>
          <div className="statLabel">Technologies Mastered</div>
        </div>
        <div className="statCard">
          <div className="statNumber">1+</div>
          <div className="statLabel">Years of Learning</div>
        </div>

        <div className="statCard">
          <div className="statNumber">20</div>
          <div className="statLabel">Years Young</div>
        </div>
      </div>
    </section>
  );
};

export default About;
