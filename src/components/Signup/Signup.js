import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Signup = () => {

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
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/home")
  }



  const onContinue = async () => {
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      })
    })
    const json = await response.json()
    console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.authtoken)
      handleSignUp()

    }
    else {
      alert("Invalid Credentials")
    }
  }
  const responseSuccessGoogle = async (response) => {
    console.log(response)
    axios({
      method: "POST",
      url: "http://localhost:5000/api/googlelogin",
      data: { tokenId: response.credential }
    }).then(response => {
      console.log(response)
    })
  }
  const responseErrorGoogle = (response) => {

  }




  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="box">
      <div className="group">
        <div className="div">
          <img className="img" alt="Group" src="https://i.ibb.co/1d5Hxrw/Screenshot-429.png" />
          <GoogleLogin
            clientId="725204124376-92pnl02prvigj9548anq9mb4fdc4jjvf.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <div className="overlap-group-wrapper">
            <button className="overlap-group">
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
          <button onClick={onContinue} className="group-3">
            <div className="overlap-2">
              <div className="text-wrapper-5">Continue</div>
            </div>
          </button>
          <p className="by-creating-an">
            <span className="span">By creating an account, you are agreeing to our</span>
            <span className="text-wrapper-6">&nbsp;</span>
            <span className="text-wrapper-7">Terms of Service</span>
            <span className="span"> and</span>
            <span className="text-wrapper-6">&nbsp;</span>
            <span className="text-wrapper-7">Privacy Policy</span>
            <span className="text-wrapper-6">.</span>
          </p>
          <div className="group-4">
            <div className="text-wrapper-8">Already have an account?</div>
            <Link to={"/login"} className="text-wrapper-9">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
