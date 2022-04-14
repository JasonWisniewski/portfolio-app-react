import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gunmetal pt-3 pb-3 d-flex justify-content-around">
      
      <a href="https://github.com/JasonWisniewski">
        <FontAwesomeIcon className= "icon" icon={faGithub} size="2x" />
      </a>

      <a href="mailto:jwizinpa95@gmail.com">
        <FontAwesomeIcon className= "icon" icon={faEnvelope} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/jason-r-wisniewski-572a1a1">
        <FontAwesomeIcon className= "icon" icon={faLinkedin} size="2x"/>
      </a>

      <a href="https://stackoverflow.com/users/17072525/jason-wisniewski">
        <FontAwesomeIcon className= "icon" icon={faStackOverflow} size="2x"/>
      </a>
    </footer>
  );
};

export default Footer;
