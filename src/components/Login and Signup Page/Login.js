import React,{useState} from "react";
import leftImg from "../../assets/authenticate.jpg";
import axios from "axios";
import googleLogo from "../../assets/google-logo.png";
import { useGoogleLogin } from '@react-oauth/google';

function Login(props){
    
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
    
    function login(event){
        event.preventDefault();
        const newUser = {
            username: user.username,
            password: user.password
        };
        axios.post("http://localhost:4000/app/login",newUser)
        .then((response) => {
            if(response.data.status !== 200){
                props.setError({
                    message: response.data.data
                });
            }else{
                props.authorized();
            }
            console.log(response.data);
        });
        setUser({
            fullName: '',
            username: '',
            password: ''
        })
    }
    const signInWithGoogle = useGoogleLogin({
        onSuccess: async tokenResponse => {
            try {
                const data = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${tokenResponse.access_token}`
                    }
                })
                const newUser = {
                    username: data.data.email,
                    password: data.data.sub
                };
                axios.post("http://localhost:4000/app/login",newUser)
                .then((response) => {
                    if(response.data.status !== 200){
                        props.setError({
                            message: response.data.data
                        });
                    }else{
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
        <div className = "authenticate-page">
            <h1>Login</h1>
            <hr />
            <div className="auth-content">
                <div className="left-div">
                    <img src={leftImg} alt="Vector Art" />
                </div>
                <div className="form-div right-div">
                    <h3>Login Here</h3>
                    <form onSubmit={login}>
                    <input type="email" placeholder="Email" name="username" value={user.username} onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                    <h6 className="error-message">{props.error.message}</h6>
                    <button type="submit" className="authenticate-btn">Login</button>
                    </form>
                    <button className="authenticate-btn google-btn" onClick={signInWithGoogle}>
                        <img src={googleLogo} alt="Icon" />
                        Sign up with Google
                    </button>
                    <p onClick={props.handleClick}>{props.current.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Login;