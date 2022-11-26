import React,{useState} from "react";
import axios from "axios";
import "./Question.css";

function CreateQuestion(){
    const [test,setTest] = useState({
        code: "",
        title: "",
        numberOfQuestions: "",
        total: ""
    });
    const [question,setQuestion] = useState({
        questionType: "",
        points: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: ""
    });
    function fetchTest(){
        axios.get("http://localhost:4000/app/get-current-test-details")
        .then((response) => {
            setTest({
                code: response.data.code,
                title: response.data.title,
                numberOfQuestions: response.data.numberOfQuestions,
                total: response.data.total
            });
            console.log(test);
        });
    }
    function handleChange(event){
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setQuestion((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
        console.log(question);
    }
    return (
        <div className="create-question-container">
            <div className="heading">
                <h3>{() => {
                    fetchTest();
                    return test.title;
                }}</h3>
                <button className="save-question">SAVE & PROCEED</button>
            </div>
            <hr />
            <div className="create-question-div">
                <div className="heading">
                    <div className="question-number">
                        <i className="fa-brands fa-ethereum"></i> 
                        <span>Question 1</span>
                    </div>
                    <div className="question-type">
                        <label htmlFor="questionType">Question Type: </label>
                        <select name="questionType" onChange={handleChange}>
                            <option value="MCQ">MCQ</option>
                            <option value="Short Answer">Short Answer</option>
                        </select>
                    </div>
                    <div className="points">
                        <label htmlFor="points">Points:</label>
                        <input type="number" name="points" value={question.points} onChange={handleChange} />
                    </div>
                </div>
                <div className="question-details">
                    <input type="text" name="question" placeholder="Question Text" value={question.question} onChange={handleChange} />
                    <div>
                        <div>
                            <label htmlFor="option1"><i className="fa-regular fa-circle"></i></label>
                            <input type="text" name="option1" placeholder="Option 1" value={question.option1} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="option2"><i className="fa-regular fa-circle"></i></label>
                            <input type="text" name="option2" placeholder="Option 2" value={question.option2} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="option3"><i className="fa-regular fa-circle"></i></label>
                            <input type="text" name="option3" placeholder="Option 3" value={question.option3} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="option4"><i className="fa-regular fa-circle"></i></label>
                            <input type="text" name="option4" placeholder="Option 4" value={question.option4} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateQuestion;