import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Onboard0 from "../../assets/onboard0.png";

function Home02() {
  const navigate = useNavigate();
  function handleSkip() {
    navigate("/login");
  }

  function handleNext() {
    navigate("/onboard/1");
  }
  return (
    <div className="onboard">
      <section>
        <img src={Onboard0} alt="onboard img" loading="eager" />
      </section>
      <section>
        <h1>Swift, Secure, Seamless Deliveries</h1>
        <p>
          Move goods faster with real-time tracking. <br />
        </p>
        <p>escrow paymeent, and trusted drivers.</p>
      </section>

      <section className="skip-next">
        <div>
          <button onClick={handleSkip}>Skip</button>
        </div>
        <div>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </div>
  );
}

export default Home02;
