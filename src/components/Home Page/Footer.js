import React from "react";
import LogoImage from "../../assets/logo.png";

function Footer(){
    return (
        <div>
        <div className="pre-footer"></div>
        <div className="footer">
        <div className="left-footer">
        <div>
        <img class="logo" src={LogoImage} alt="Logo"/>
        <h5>Quiz App</h5>
        </div>
        <h6>© 2022, Pranjit Kakoti Inc. All rights reserved</h6>
        </div>
        <div className="right-footer">
            <a href="/">Terms and conditions</a>
            <a href="/">Privacy Policies and Cookies</a>
            <a href="/">Contact Us</a>
        </div>
        </div>
        </div>
    )
}

export default Footer;