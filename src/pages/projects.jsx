import React from "react";
import "../css/projects.css";
import Portfolioimg from "../images/portfolio-img.png";
import Calimg from "../images/calculator-img.png";

const Projects = () => {
    return (
        <div className="projects">
            <div className="p-head">
                <h1 className="head">PROJECTS</h1>
                <h2>Check out some of my work</h2>
            </div>

            <div className="p-card">
                <img src={Portfolioimg} alt="" />
                <p className="RE">REACT</p>
            </div>

            <div className="p-card">
                <img className="calimg" src={Calimg} alt="" />
                <p className="HCJ">HTML / CSS / JAVASCRIPT</p>
            </div>

            <div className="p-card">
                <img src={Portfolioimg} alt="" />
                <p className="RE">REACT</p>
            </div>

        </div>

    )
}

export default Projects;