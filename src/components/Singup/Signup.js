import "./Signup.css";

const Signup = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="div">
          <img className="img" alt="Group" src="https://i.ibb.co/1d5Hxrw/Screenshot-429.png" />
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="flat-color-icons" alt="Flat color icons" src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" />
              <div className="text-wrapper">Continue with Google</div>
            </div>
          </div>
          <div className="group-2">
            <img className="line" alt="Line" src="https://i.ibb.co/XVdRT8m/6f620273-ca77-4e0e-be61-e5bd5b5847c9.png" />
            <div className="text-wrapper-2">Or</div>
            <img className="line-2" alt="Line" src="https://i.ibb.co/XVdRT8m/6f620273-ca77-4e0e-be61-e5bd5b5847c9.png" />
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="text-wrapper-3">Email</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap">
              <div className="text-wrapper-4">Password</div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-2">
              <div className="text-wrapper-5">Continue</div>
            </div>
          </div>
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
            <div className="text-wrapper-9">Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
