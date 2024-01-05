import React from "react";
import "../css/skills.css";
import HTML from "../images/HTML icon.svg";
import JS from "../images/JS icon.svg";
import Reacti from "../images/REACT icon.svg";
import Github from "../images/github icon.svg";
import CSS from "../images/CSS icon 2.svg";

const Skills = () => {
    return(
        <div className="skills">
            <div className="s-content">
                <h1 className="s-head">Skills</h1>
                <p className="s-parah">Here You Can Know About My Skills</p>
            </div>

            <div className="s-card">
                <div className="s-icons">
                <img src={HTML} alt="" />
                <img src={CSS} alt="" />
                <img src={JS} alt="" />
                <img src={Reacti} alt="" />
                <img src={Github} alt="" />
            </div>
            </div>
        </div>
    )
}
export default Skills;