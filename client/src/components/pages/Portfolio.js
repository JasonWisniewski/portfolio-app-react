import React from "react";
import brewHops from "../../assets/images/Brew-Hops.jpg";
import planetExpress from "../../assets/images/resource-library.png";
import firstPortfolio from "../../assets/images/portfolio1.png";
import Weather from "../../assets/images/Weather.png";
import Wheat from "../../assets/images/Wheat.jpg";
import Elcap from "../../assets/images/Elcap.jpg";
import CodingQuiz from "../../assets/images/CodingQuiz.png";
import Marketplace from "../../assets/images/Marketplace.png";


const Portfolio = (props) => {
  const projectsArr = [
    {
      name: "brew hops",
      description: "Brew Hops! Is an interactive map and directory created to help you find the best route between breweries in Salt Lake City. Whether you’re a visitor or a local, this app will help you sample Salt Lake’s finest craft beer selection while keeping you safe and speedy.I learned a lot about implementing Bootstrap, JQuery, JavaScript, HTML, and CSS.",
      src: brewHops,
      liveLink: 'https://jasonwisniewski.github.io/brew-hops/',
      repoLink: 'https://github.com/JasonWisniewski/brew-hops'
    },
    {
      name: "planet express.js",
      description: "An innovative new web application that allows you save and organize resources from all over the World Wide Web with efficiency and ease. No more scrolling through endless bookmarks looking for obscure documentation, no more fruitless google searches, Planet Express.js is here to help you become a better student, programmer, or developer!",
      src: planetExpress,
      liveLink: 'https://planet-express-js.herokuapp.com/',
      repoLink: 'https://github.com/mhowitz/planet-express-js'
    },
    {
      name: "Marketplace",
      description: "This project creates a marketplace where people can buy and sell items to other users.  This is a full stack MERN application created with a group of 4.",
      src: Marketplace,
      liveLink: 'http://moneybags-marketplace.herokuapp.com/',
      repoLink: 'https://github.com/mhowitz/business-adultmen'
    },
    {
      name: "Weather Dashboard",
      description: "This projects purpose is to make a weather dashboard that shows the current weather and 5 day forecast of the user defined city. It also saves the user searches in local storage and displays search history as buttons on side of dashboard. This project taught me about access data from a 3rd part API and solidified creating DOM elements in JavaScript.",
      src: Weather,
      liveLink: 'https://jasonwisniewski.github.io/weather-dashboard/',
      repoLink: 'https://github.com/JasonWisniewski/weather-dashboard'
    },
    {
      name: "Budget Track PWA",
      description: "This application functions offline using a service worker and indexedDB. A user can create multiple transactions which are stored on the clients side and uploaded to the app when internet connection is reestablished.I learned about indexedDB and servicer workers in creating this application.",
      src: Wheat,
      repoLink: 'https://drive.google.com/file/d/19UEtHwqUOMODvKFGNfnNtV9A1Ln-pydy/view',
      liveLink: 'https://github.com/JasonWisniewski/budget-tracker-PWA',
    },
    {
      name: "Social App API",
      description: "This application creates api routes for a social media application website using mongoDB. The following routes were created: getAllUsers, getUserById, createUser, deleteUser, addFriend, deleteFriend, getAllThought, addThought, getThoughtById, updateThought, removeThought, addReaction, and removeReaction with MongoDB.",
      src: Elcap,
      liveLink: '',
      repoLink: 'https://github.com/JasonWisniewski/social-app-api'
    },
    {
      name: "Coding Quiz",
      description: "This project purpose is to make a coding quiz that functions when the start button is clicked. This starts a timer, if the player gets the wrong answer time will be deducted from the timer. If the user gets the correct answer points will be added to the users score. This project taught me about click events, DOM manipulation, and storing data in local storage with JavaScript.",
      src: CodingQuiz,
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
