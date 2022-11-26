import React,{useState} from "react";
import axios from "axios";
import ModalPopup from "./Modal/ModalPopup";

function TestDetails(){
    const [details,setDetails] = useState({
        title: "",
        numberOfQuestions: "",
        total: ""
    });
    const [test, setTest] = useState({
        name: "",
        code: ""
    });
    const [openModal,setOpenModal] = useState(false);

    function handleChange(event){
        event.preventDefault();
        setDetails((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        const newTest = {
            title: details.title,
            numberOfQuestions: details.numberOfQuestions,
            total: details.total
        }
        axios.post("http://localhost:4000/app/create-test",newTest)
        .then((response) => {
            setTest({
                name: response.data.title,
                code: response.data.code
            })
        });
        
        setDetails({
            title: "",
            numberOfQuestions: "",
            total: ""
        })
    }

    function changeModal(){
        setOpenModal(!openModal);
    }

    return (
        <div className="form-div test-details">
            <h3>Test Details</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Test Title" value={details.title} onChange={handleChange} />
                <input type="number" name="numberOfQuestions" placeholder="Number of Questions" value={details.numberOfQuestions} onChange={handleChange} />
                <input type="number" name="total" placeholder="Total Marks" value={details.total} onChange={handleChange} />
                <div class="continue-div">
                    <button className="continue" type="submit" onClick={changeModal}> 
                        Continue 
                        <i className="fa-solid fa-arrow-right-long continue-arrow"></i>
                    </button>
                </div>
            </form>
            {openModal && <ModalPopup test={test} changeModal={changeModal} />}
        </div>
    )
}

export default TestDetails;