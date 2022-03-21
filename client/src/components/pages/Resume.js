import React from "react";
import CV from "../../assets/images/Resume.png";

const Resume = () => {
  return (
    <div>
      <div>
        <div className="p-2 m-2 justify-content-center">
          you can download a pdf of my resume
          <a href={CV} download="Jason-Wisniewski-Resume">
            Here!
          </a>
        </div>
        <img className="p-2 m-2" src={CV}></img>
      </div>
    </div>
  );
};

export default Resume;
