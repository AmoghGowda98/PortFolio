import React from "react";
import "../components/Projects.css";
import i from "../images/review.png";
import j from "../images/menu.png";
import k from "../images/port.png";

const Projects = () => {
  return (
    <div className="p">
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={i} alt="" style={{ width: "300px",height:'150px'}} />
          </div>
          <div className="content">
            <h2>Review</h2>
            <p>
            Created a user review card, using HTML, CSS, JavaScript, React JS. The site loads review of each person for every 5 seconds..
            </p>
          </div>
          <div className="teckstack">
            <h3>Teck Stack</h3>
            <div className="tecks">
              <button className="teck">REACT</button>
              <button className="teck">HTML</button>
              <button className="teck">CSS</button>
              <button className="teck">JS</button>
            </div>
          </div>
          <div className="links">
            <a href="https://amoghgowda98.github.io/Review/" target='_blank' className="linkk">
              Demo
            </a>
            <a href="https://github.com/AmoghGowda98/Review" target='_blank'className="linkk">
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={j} alt="" style={{ width: "300px", height:'150px'}} />
          </div>
          <div className="content">
            <h2>Food Menu</h2>
            <p>
            Created a Food Menu app using HTML, CSS, JavaScript and React JS. The site allows users to filter breakfasts, lunch and dinner.
            </p>
          </div>
          <div className="teckstack">
            <h3>Teck Stack</h3>
            <div className="tecks">
              <button className="teck">REACT</button>
              <button className="teck">HTML</button>
              <button className="teck">CSS</button>
              <button className="teck">JS</button>
            </div>
          </div>
          <div className="links">
            <a href="https://amoghgowda98.github.io/FoodMenu/" target='_blank' className="linkk">
              Demo
            </a>
            <a href="https://github.com/AmoghGowda98/FoodMenu" target='_blank' className="linkk">
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={k} alt="" style={{ width: "300px",height:'150px'}} />
          </div>
          <div className="content">
            <h2>My Portfolio</h2>
            <p>
            Made my personal portfolio using REACT, HTML and CSS. Styled the website to be responsive and implemented pure REACT..
            </p>
          </div>
          <div className="teckstack">
            <h3>Teck Stack</h3>
            <div className="tecks">
              <button className="teck">REACT</button>
              <button className="teck">HTML</button>
              <button className="teck">CSS</button>
              <button className="teck">JS</button>
            </div>
          </div>
          <div className="links">
            <a href="https://amoghgowda98.github.io/Portfolio/" target='_blank' className="linkk">
              Demo
            </a>
            <a href="https://github.com/AmoghGowda98/Portfolio" target='_blank' className="linkk">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
