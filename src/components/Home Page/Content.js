import React from "react";
import MiddleImage from "../../assets/adv.png";

function Content(){
    return (
        <div class = "home-content">
            <h1 class="home-heading">Fully Automated Exam Proctoring</h1>
            <h2 class="heading-motto">No More Cheating on Online Tests</h2>
            <div class="button-div">
                <a class = "take-test" href="/authenticate">TAKE TEST <i class="fa-solid fa-chevron-right"></i></a>
                <a class = "create-test" href="/authenticate">CREATE TEST</a>
            </div>
            <div class="advertisement-div">
                <div>
                    <img class="left-img" src="https://cdn.autoproctor.co/static/img/static-pages/hero-illustration-1.svg" alt="Left Image" />
                </div>
                <div>
                    <img src={MiddleImage} alt="Middle Image" />
                </div>
                <div>
                    <img class = "right-img" src="https://cdn.autoproctor.co/static/img/static-pages/hero-illustration-2.svg" alt="Right Image" />
                </div>
            </div>
        </div>
    )
}


export default Content;