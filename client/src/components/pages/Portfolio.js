import React from "react";
import brewHops from "../../assets/images/Brew-Hops.jpg";
import planetExpress from "../../assets/images/resource-library.png";
import firstPortfolio from "../../assets/images/portfolio1.png";

const Portfolio = (props) => {
  const projectsArr = [
    {
      name: "brew hops",
      description: "first project",
      src: brewHops,
      liveLink: 'https://jasonwisniewski.github.io/brew-hops/',
      repoLink: 'https://github.com/JasonWisniewski/brew-hops'
    },
    {
      name: "planet express.js",
      description: "second project",
      src: planetExpress,
      liveLink: 'https://planet-express-js.herokuapp.com/',
      repoLink: 'https://github.com/mhowitz/planet-express-js'
    },
    {
      name: "planet express.js",
      description: "Portfolio with HTML5 and CSS",
      src: firstPortfolio,
      liveLink: 'https://jasonwisniewski.github.io/Portfolio-App/',
      repoLink: 'https://github.com/mhowitz/planet-express-js'
    },
    {
      name: "planet express.js",
      description: "Portfolio with HTML5 and CSS",
      src: firstPortfolio,
      liveLink: 'https://jasonwisniewski.github.io/Portfolio-App/',
      repoLink: 'https://github.com/mhowitz/planet-express-js'
    },
    {
      name: "planet express.js",
      description: "Portfolio with HTML5 and CSS",
      src: firstPortfolio,
      liveLink: 'https://jasonwisniewski.github.io/Portfolio-App/',
      repoLink: 'https://github.com/JasonWisniewski/Portfolio-App'
    },
    {
      name: "planet express.js",
      description: "Portfolio with HTML5 and CSS",
      src: firstPortfolio,
      liveLink: 'https://jasonwisniewski.github.io/Portfolio-App/',
      repoLink: 'https://github.com/mhowitz/planet-express-js'
    },
  ];

  return (
    <div className="">
      <h1>
        Projects
      </h1>
     
        {projectsArr.map((project,i) => (
        <div key={i} className="row vw">  
          <div className=" ">
        
            <div className="card ">
                <img src={project.src} />
              <div className="card-header">
                {project.name}
              </div>
              <div className="card-body">
                <h5 className="card-title">Live link: {project.liveLink}</h5>
                <h5 className="">Github repo: {project.repoLink}</h5>
                <h5 className="card-text">{project.description} .</h5>
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Portfolio;
