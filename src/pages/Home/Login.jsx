import React from "react";
import "./Home.css";
import Onboard3 from "../../assets/onboard3.png";

function Login() {
  return (
    <div className="onboard">
      <section>
        <img src={Onboard3} alt="onboard img" />
      </section>
      <section>
        <h1>Choose your login method</h1>
        <p>
          By connecting your wallet, you agree to our{" "}
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
      </section>
      <section>
        <button className="login-btn">Connect Wallet</button>
      </section>
    </div>
  );
}

export default Login;
