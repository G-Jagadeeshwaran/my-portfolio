import React from "react";
import "../css/home.css";
import Github from "../images/github.svg";
import Insta from "../images/instagram2.svg";
import In from "../images/linkedin.svg";
import Myimage from "../images/my-image.jpg"
import Emoji from "../images/emoji2.svg";
import Developer from "../images/developer.svg";
import Resume from '../Files/Jagadeeshwaran-resume.pdf';

const Home = () => {
    return (
        <div className="home">
            <div className="h-left">
                <div className="h-name">
                    <span>Hello I'm </span>
                    <span>Jagadeeshwaran</span>
                    <span>Frontend Developer with the skills of creating responsive webpages
                        freshers in designing and developement eager to show my skills </span>
                </div>

                <a href={Resume} download={Resume}>
                <button className="button h-button">
                    Download CV
                </button>
                </a>

                <div className="h-icons">
                    <img src={Github} alt="Image not shown"/>
                    <img src={In} alt="Image not shown" />
                    <img src={Insta} alt="Image not shown" />
                </div>
            </div>

            <div className="h-right">
                    <img src={Myimage} alt="" />               
            </div>
            
        </div>
    )
}
export default Home;