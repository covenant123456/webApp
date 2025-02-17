import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Onboard0 from "../../assets/onboard0.png";

function Home02() {
  return (
    <>
      <section>
        <img src={Onboard0} alt="onboard img" />
      </section>
      <section>
        <h1>Swift, Secure, Seamless Deliveries</h1>
        <p>
          Move goods faster with real-time tracking. <br />
        </p>
        <p>escrow paymeent, and trusted drivers.</p>
      </section>

      <section>
        <Link to="/connect">Skip</Link>
        <Link to="/onboard/1">Next</Link>
      </section>
    </>
  );
}

export default Home02;
