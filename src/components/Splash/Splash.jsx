import React from "react";
import "./Splash.css";
import splashlogo from "../../assets/splashlogo.jpg";

function Splash() {
  return (
    <div className="splash-screen">
      <div>
        <img src={splashlogo} alt="splashscreen" />
      </div>
    </div>
  );
}

export default Splash;
