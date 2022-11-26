import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import InstructorHome from "./instructorHome";



function Instructor(){

    return (
        <div className="instructor">
            <Navbar />
            <Menu />
            <InstructorHome /> 
        </div>
    )
}

export default Instructor;