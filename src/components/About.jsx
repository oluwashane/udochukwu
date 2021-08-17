import React from 'react'
import '../assets/style/AboutMe.css';

const skills = (
  <div className="skills">
    <h4>What do i do</h4>
    <div className="skillList">
      <p>html, sass, Javascript(React, Node, Express), redux</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="aboutMe">
      <h1>About</h1>
      <p>
      I would have to skip the boring part and go straight to the point. 
      I'm a goal-driven developer that focuses on getting the work done with minimum error. 
      Over the years of learning and development, I have been opportune to learn from the best and work as a team member to contribute and find solution to problems. 
      Right now, I'm currently working with MERN stack.
      </p>
      {skills}
      <div className="contactMe">
        <a class="text-color" rel="noopener noreferrer" target="_blank" href="https://github.com/oluwashane">Github</a>
        <a className="text-color" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1ZoF_VCdguIhexI0JFQCQdGkWJROASD-U/view?usp=sharing">Resume</a>
        <a className="text-color" rel="noopener noreferrer" target="_blank" href="mailto:ogbulaforudochukwu@gmail.com">Email</a>
      </div>
      
</div>
  )
}

export default About
