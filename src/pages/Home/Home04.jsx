import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Onboard2 from "../../assets/onboard2.png";

function Home04() {
  return (
    <>
      <section>
        <img src={Onboard2} alt="onboard-img" />
      </section>
      <section>
        <h1>Escrow Payments for Peace of Mind</h1>
        <p>
          Your money stays safe until the delivery is confirmed, No scams, just
          secure transactions
        </p>
      </section>
      s
      <section>
        <Link to="/connect">Skip</Link>
        <Link to="/login">Next</Link>
      </section>
    </>
  );
}

export default Home04;
