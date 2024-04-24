import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { GoogleOAuthProvider } from '@react-oauth/google';
import firebase from "firebase/compat/app"

const firebaseConfig = {
  apiKey: "AIzaSyCAkDXQR_HWwzMcwGmy5lEuSCV0K7UJjgQ",
  authDomain: "space-inn.firebaseapp.com",
  projectId: "space-inn",
  storageBucket: "space-inn.appspot.com",
  messagingSenderId: "929249206015",
  appId: "1:929249206015:web:523a1fa507e1cb86db76ca"
};

firebase.initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='725204124376-92pnl02prvigj9548anq9mb4fdc4jjvf.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
