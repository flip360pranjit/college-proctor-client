import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./styles/styles.css";
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.render(<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}><App /></GoogleOAuthProvider>, document.getElementById("root"));