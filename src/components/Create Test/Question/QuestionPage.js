import React from "react";
import Navbar from "../Navbar";
import CreateQuestion from "./CreateQuestion";

function QuestionPage(){
    return (
        <div className="instructor">
            <Navbar />
            <CreateQuestion /> 
        </div>
    )
}

export default QuestionPage;