import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {

    return (
        <div className="contact-form">
            <div className="C-left">
                <div className="c-name">
                    <span>Lets get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>

            <div className="c-right">
                <form>
                    <input type="text" placeholder="Name" />
                    <br />
                    <input type="email" placeholder="Email" />
                    <br />
                    <textarea name="" placeholder="Message" cols="30" rows="10"></textarea>
                    <br />
                    <button  className="button c-btn">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;