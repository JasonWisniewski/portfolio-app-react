import React from "react";
import CV from "../../assets/images/Resume.png";

const Resume = () => {
  return (
    <div>
      <div>
        <div className="p-2 m-2 justify-content-center">
          you can download a pdf of my resume
          <a href="./directory/yourfile.pdf" download="newfilename">
            Here!
          </a>
        </div>
        <img className="p-2 m-2" src={CV}></img>
      </div>
    </div>
  );
};

export default Resume;
