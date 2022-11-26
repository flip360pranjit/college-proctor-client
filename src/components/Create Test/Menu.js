import React from "react";
import LogoImage from "../../assets/logo.png";

function Menu(){
    return (
        <div className="create-test-menu">
            <a class="logo-link" href="/">
                <img class="logo" src={LogoImage} alt="Logo"/>
                <span class="logo-txt">Quiz App</span>
            </a>
            <a href="/instructor"><i class="menu-arrows fa-solid fa-angle-right"></i><i className="menu-icons fa-solid fa-house"></i> Home</a>
            <a href="/instructor"><i class="menu-arrows fa-solid fa-angle-right"></i><i className="menu-icons fa-solid fa-cloud-arrow-down"></i> Archived Tests</a>
            <a href="/instructor"><i class="menu-arrows fa-solid fa-angle-right"></i><i className="menu-icons fa-solid fa-file-lines"></i> More Features</a>
            <a href="/instructor"><i class="menu-arrows fa-solid fa-angle-right"></i><i className="menu-icons fa-solid fa-circle-notch"></i> Usage</a>
            <a href="/instructor"><i class="menu-arrows fa-solid fa-angle-right"></i><i className="menu-icons fa-solid fa-bag-shopping"></i> Purchase History</a>
            <a href="/instructor"><i class="menu-arrows fa-solid fa-angle-right"></i><i className="menu-icons fa-sharp fa-solid fa-circle-user"></i> Account</a>
            <a href="/instructor"><i class="menu-arrows fa-solid fa-angle-right"></i><i className="menu-icons fa-solid fa-bell"></i> What's New</a>
        </div>
    )
}

export default Menu;