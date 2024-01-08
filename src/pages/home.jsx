import React from "react";
import "../css/home.css";
import Myimage from "../images/my-image.jpg"
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
                    <a href="https://github.com/G-Jagadeeshwaran" target="blank"><i class="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/jagadeeshwaran-g-0925922a2/" target="blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/_jagan_210/" target="blank"><i class="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>

            <div className="h-right">
                <img src={Myimage} alt="" />
            </div>

        </div>
    )
}
export default Home;