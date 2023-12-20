import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css";
const Login = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="box">
      <div className="group">
        <div className="div">
          <img className="img" alt="Group" src="https://i.ibb.co/1d5Hxrw/Screenshot-429.png" />
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
          <input style={{backgroundColor:"#f8f9f7"}} className="px-2 overlap-wrapper overlap"
            placeholder="Email"
          />
          <input style={{backgroundColor:"#f8f9f7"}} className="px-2 div-wrapper overlap"
            placeholder="Password"
          />
           <Link className="text-wrapper-8-login">Forgot Password?</Link>

          <button className="group-3-login">
            <div className="overlap-2">
              <div className="text-wrapper-5">Continue</div>
            </div>
          </button>
          <div className="group-4-login">
            <div className="text-wrapper-8">Dont't have an account?</div>
            <Link to={"/"} className="text-wrapper-9">Sign up</Link>
          </div>
        </div>
      </div>
    </div>      
  )
}

export default Login