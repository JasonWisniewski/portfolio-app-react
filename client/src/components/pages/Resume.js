import React from "react";
import CV from "../../assets/images/Resume.png";

const Resume = () => {
  return (
    <div className="bg-gray">
      <div>
        <div className="p-4 justify-content-center">
          you can download a pdf of my resume
          <a href={CV} download="Jason-Wisniewski-Resume">
            Here!
          </a>
          <ul className="mt-4">
            <h4>SKILLS</h4>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>Mongo DB</li>
            <li>Sequelize</li>
          </ul>
        </div>
        <img className="p-2 m-2" src={CV}></img>
      </div>
    </div>
  );
};

export default Resume;
