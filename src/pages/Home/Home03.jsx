import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Onboard1 from "../../assets/onboard1.png";

function Home03() {
  return (
    <>
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

      <section>
        <Link to="/connect">Skip</Link>
        <Link to="/onboard/2">Next</Link>
      </section>
    </>
  );
}

export default Home03;
