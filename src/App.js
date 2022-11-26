import React,{useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home Page/Home";
import Authenticate from "./components/Login and Signup Page/Authenticate";
import Instructor from "./components/Create Test/Instructor";
import QuestionPage from "./components/Create Test/Question/QuestionPage";

function App() {
  const [authorized,setAuthorized] = useState(false);
  function changeAuthorized(){
    setAuthorized(!authorized);
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/authenticate" element={<Authenticate changeAuthorized={changeAuthorized} />} />
        <Route exact path="/instructor" element={authorized && <Instructor />} />
        <Route exact path="/instructor/add-question" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
