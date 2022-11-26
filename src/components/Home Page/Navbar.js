import React from "react";
import LogoImage from "../../assets/logo.png";

function Navbar(){
    return (
        <div class="nav-div">
      <nav class="navbar navbar-expand-lg navbar-dark nav-bar">
        <a class="navbar-brand nav-logo" href="/home">
          <img class="logo" src={LogoImage} alt="Logo"/>
          <span class="logo-txt">Quiz App</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon toggle-button"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link nav-txt" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-txt" href="/products">FAQs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-txt" href="/myaccount">Help</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
}

export default Navbar;