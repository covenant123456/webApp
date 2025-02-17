import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Onboard1 from "../../assets/onboard1.png";

function Home03() {
  const navigate = useNavigate();
  function handleSkip() {
    navigate("/login");
  }

  function handleNext() {
    navigate("/onboard/2");
  }

  return (
    <div className="onboard">
      <section>
        <img src={Onboard1} alt="onboard img" />
      </section>
      <section>
        <h1>Track Your Orders in Real Time</h1>
        <p>
          Watch your deliveries live, confirm and release payments only when
          satisfied
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

export default Home03;
