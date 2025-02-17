import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Onboard2 from "../../assets/onboard2.png";

function Home04() {
  const navigate = useNavigate();

  function handleSkip() {
    navigate("/login");
  }

  function handleNext() {
    navigate("/login");
  }
  return (
    <div className="onboard">
      <section>
        <img src={Onboard2} alt="onboard-img" />
      </section>
      <section>
        <h1>Secure Payments for Peace of Mind</h1>
        <p>
          Your money stays safe until the delivery is confirmed,
          <br /> No scams, just secure transactions
        </p>
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

export default Home04;
