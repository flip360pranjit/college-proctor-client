import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";


function Authenticate(props){
    const [current, setCurrent] = useState({
        message: "Do not have an account? Register"
    });
    const [error, setError] = useState({
        message: ""
    })
    function handleClick(event){
        event.preventDefault();
        const currentMessage = (current.message === "Already have an account? Sign in") ?
        "Do not have an account? Register" : "Already have an account? Sign in";
        setCurrent({
            message: currentMessage
        });
    }
    let navigate = useNavigate();
    function Authorized(){
        props.changeAuthorized();
        navigate("/instructor");
    }

    return (current.message === "Already have an account? Sign in") ? 
    <Register handleClick={handleClick} current={current} authorized={Authorized} /> : 
    <Login error={error} setError={setError} handleClick={handleClick} current={current} authorized={Authorized} />;
}

export default Authenticate;