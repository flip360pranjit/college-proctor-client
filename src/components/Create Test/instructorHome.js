import React from "react";
import TestDetails from "./TestDetails";

function InstructorHome() {
    return (
        <div className="create-test-home-content">
            <div className="create-test-heading">
                <h4>Create Test</h4>
                <a href="/"><h6><i class="fa-regular fa-circle-info"></i> How to Create a Test</h6></a>
                
            </div>
            <div>
                <hr />
                <p>Watch the video below to see how to create a test.</p>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/ab0Ib4K2oPw" title="Draw with Me | Shanks Digital Art in Procreate | One Piece" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <TestDetails />
            </div>
                
        </div>
    )
}

export default InstructorHome;