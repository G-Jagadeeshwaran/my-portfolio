import React from "react";
import "../css/navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Portfolio</div>

            </div>


            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>

                        <li>
                            <Link to="home" smooth={true} duration={500} offset={0}>Home</Link>
                        </li>

                        <li>
                            <Link to="about" smooth={true} duration={500} offset={0}>About</Link>
                        </li>

                        <li>
                            <Link to="skills" smooth={true} duration={500} offset={0}>Skills</Link>
                        </li>

                        <li>
                            <Link to="projects" smooth={true} duration={500} offset={0}>Projects</Link>
                        </li>

                        <li>
                            <Link to="contact-form" smooth={true} duration={500} offset={0} className="button">Contact</Link>
                        </li>
                    </ul>
                </div>



            </div>
        </div>
    )
}

export default Navbar;