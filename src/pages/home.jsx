import React from "react";
import "../css/home.css";

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

                <button className="button h-button">
                    Download CV
                </button>

                <div className="h-icons">
                    
                </div>
            </div>

            <div className="h-right">
                    i am right side
            </div>
        </div>
    )
}
export default Home;