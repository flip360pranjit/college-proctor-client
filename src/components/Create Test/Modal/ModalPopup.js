import React from "react";
import {Link} from "react-router-dom";
import "./Modal.css";

function ModalPopup(props){
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="closeBtn-div">
                    <div className="closeBtn"onClick={props.changeModal}>
                        <i class="fa-solid fa-rectangle-xmark close-icon"></i>
                    </div>
                </div>
                <h3>Your test has been created!</h3>
                <div className="modal-details">
                    <h4>Your test name is:</h4>
                    <span>{props.test.name}</span>
                </div>
                <div className="modal-details">
                    <h4>Your test code is:</h4>
                    <span>{props.test.code}</span>
                </div>
                <Link to="/instructor/add-question">
                    <div class="continue-div">
                        <button className="continue"> 
                            Add Questions 
                            <i className="fa-solid fa-arrow-right-long continue-arrow"></i>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ModalPopup;