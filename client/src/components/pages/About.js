import React from 'react'
import headShot from "../../assets/images/HeadShot.jpg";

const About = () => {
  return (
    <div className="p-3">
      <h1>About Me</h1>
      <img src={headShot}></img>
      <p>
        I am a Full Stack Web Developer experienced in creating mobile-first websites and applications.  Skilled in writing clean, efficient DRY code.  Highly motived self-starter, comfortable in team environment, eager to utilize my skills to contribute to your business and continue to develop my skills.  Checkout projects I have completed below in the projects section.
      </p>  
    </div>
  )
}

export default About