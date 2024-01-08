import React from "react";
import "../css/navbar.css";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Portfolio</div>

            </div>


            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <button className="button n-button">
                    Contact
                </button>

            </div>
        </div>
    )
}

export default Navbar;