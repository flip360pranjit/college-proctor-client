import React,{useState} from "react";
import leftImg from "../../assets/authenticate.jpg";
import axios from "axios";
import googleLogo from "../../assets/google-logo.png";
import { useGoogleLogin } from '@react-oauth/google';

function Register(props){
    
    const [user, setUser] = useState({
        fullName: '',
        username: '',
        password: ''
    });
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    }
    
    function register(event){
        event.preventDefault();
        const newUser = {
            fullName: user.fullName,
            username: user.username,
            password: user.password
        };
        axios.post("http://localhost:4000/app/register",newUser)
        .then((response) => {
            if(response.status === 200){
                props.authorized();
            }
        });
        setUser({
            fullName: '',
            username: '',
            password: ''
        })
    }
    const signUpWithGoogle = useGoogleLogin({
        onSuccess: async tokenResponse => {
            try {
                const data = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${tokenResponse.access_token}`
                    }
                })
                const newUser = {
                    fullName: data.data.given_name + ' ' + data.data.family_name,
                    username: data.data.email,
                    password: data.data.sub
                };
                axios.post("http://localhost:4000/app/register",newUser)
                .then((response) => {
                    if(response.status === 200){
                        props.authorized();
                    }
                });
                setUser({
                    fullName: '',
                    username: '',
                    password: ''
                })
            } catch(err){
                console.log(err);
            }
        }
      });

    return (
        <div class = "authenticate-page">
            <h1>Register</h1>
            <hr />
            <div className="auth-content">
                <div className="left-div">
                    <img src={leftImg} alt="Vector Art" />
                </div>
                <div className="form-div right-div">
                    <h3>Register Here</h3>
                    <form onSubmit={register}>
                    <input type="text" placeholder="Full Name" name="fullName" value={user.fullName} onChange={handleChange} autocomplete="off" />
                    <input type="email" placeholder="Email" name="username" value={user.username} onChange={handleChange} autocomplete="off" />
                    <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} autocomplete="off" />
                    <button type="submit" className="authenticate-btn">Register</button>
                    </form>
                    <button className="authenticate-btn google-btn" onClick={signUpWithGoogle}>
                        <img src={googleLogo} alt="Icon" />
                        Sign up with Google
                    </button>
                    <p onClick={props.handleClick}>{props.current.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Register;