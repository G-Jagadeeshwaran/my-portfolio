import React from "react";
import "../css/about.css";

const About = () => {
    return (

        <div className="about" id="About">
            <div className="h-content">
                <h1>ABOUT</h1>
                <p>Hi here you can see my qualifications and what i am currently doing 
                    my education details <br />And my contact.
                </p>
                
                <div className="i-content">
                <h2 className="h-intro">INTRODUCTION ABOUT ME</h2>
                <p>As a fresher I'm eager to contribute my perspective skills <br />
                    i have honed my problem solving skills. Currently I'm going to <br />
                    complete my bacholar degree.Developing a responsive web application <br />
                    passionate about creating good web pages. 
                </p>
                <span>Contact: 8248031023</span>
                </div>

                <div className="education">
                    <h2>EDUCATION</h2>
                    <span>BCA</span>
                    <span>"BACHOLAR OF COMPUTER APPLICATION"</span>
                    <span>Mohamad Sathak College Of Arts And Science</span>
                    <span>2021-2024</span>
                </div>
            </div>
               
        </div>
    )
}
export default About