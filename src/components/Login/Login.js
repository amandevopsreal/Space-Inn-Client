import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  useEffect(() => {
    const e = document.getElementById("root")
    e.style.backgroundImage = "url('https://i.ibb.co/2ZBMr59/texture.png')";
    return () => {
      const e = document.getElementById("root")
      e.style.backgroundImage = "url('')";
    }
  }, [])
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/")
  }

  const onContinue = async () => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password })
    })
    const json = await response.json()
    console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.authtoken)
      handleLogin()
    }
    else {
      alert("Invalid Credentials")
    }
  }

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const json = await axios({
        method: "POST",
        url: "http://localhost:5000/api/auth/googlelogin",
        data: { access_token: codeResponse.access_token }
      })
      console.log(json)
      if (json.data.success) {
        localStorage.setItem("token", json.data.authtoken)
        handleLogin()
      }
    },
    onError: (error) => console.log("Login Failed:", error)
  });

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} className='login-wrapper'>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="box">
        <div className="group">
          <div className="div">
            <img className="img" alt="Group" src="https://i.ibb.co/1d5Hxrw/Screenshot-429.png" />
            <div className="overlap-group-wrapper">
              <button onClick={() => login()} className="overlap-group">
                <img className="flat-color-icons" alt="Flat color icons" src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" />
                <div className="text-wrapper">Continue with Google</div>
              </button>
            </div>
            <div className="group-2">
              <img className="line" alt="Line" src="https://i.ibb.co/XVdRT8m/6f620273-ca77-4e0e-be61-e5bd5b5847c9.png" />
              <div className="text-wrapper-2">Or</div>
              <img className="line-2" alt="Line" src="https://i.ibb.co/XVdRT8m/6f620273-ca77-4e0e-be61-e5bd5b5847c9.png" />
            </div>
            <input type="email" id="email" name="email" onChange={onChange} style={{ backgroundColor: "#f8f9f7" }} className="px-2 overlap-wrapper overlap"
              placeholder="Email"
            />
            <input type="password" id="password" name="password" onChange={onChange} style={{ backgroundColor: "#f8f9f7" }} className="px-2 div-wrapper overlap"
              placeholder="Password"
            />
            <Link className="text-wrapper-8-login">Forgot Password?</Link>

            <button onClick={onContinue} className="group-3-login">
              Continue
            </button>
            <div className="group-4-login">
              <div className="text-wrapper-8">Dont't have an account?</div>
              <Link to={"/signup"} className="text-wrapper-9">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login