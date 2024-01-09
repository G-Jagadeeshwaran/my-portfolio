import React from "react";
import "../css/footer.css";
import footerimg from "../images/footerimg.jpg"

const Footer = () => {
    return (
        <div className="footer">
            <img src={footerimg} alt="" style={{ width: '100%'}} />
            <div className="f-content">
                <span>Developed By Jagadeeshwaran</span>
                <span>Follow me</span>
            </div>

            <div className="f-icons">
                <i class="fa-brands fa-square-github" />
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-square-instagram"></i>
            </div>
        </div>
    )
}
export default Footer