import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Splash from "../../components/Splash/Splash";
import "./Home.css";
import { roleData } from "../../data.js";

function Home() {
  const [removeSplash, setRemoveSplash] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      setRemoveSplash(true);
    }, 500);
  }, []);

  function handleClick() {
    navigate("/onboard");
  }

  console.log(roleData);

  return (
    <>
      {removeSplash == true ? (
        <div className="home">
          <section>
            <h1>Get Started with Dispatches</h1>
            <p>
              Choose your role to continue. Are you signing up as a Rider or as
              a User
            </p>
          </section>

          <div className="user-rider">
            {roleData.map((item, idx) => {
              return (
                <section
                  onClick={() => handleClick(idx)}
                  // style={{ borderColor: isPress ? "#FF851B" : "#666666" }}
                  className={item.role}
                  key={idx}
                >
                  <div>
                    <img src={item.riderImg} />
                  </div>
                  <div>
                    <div>
                      <p className="signup-headR">
                        Sign up as a {item.role_cap}
                      </p>
                    </div>
                    <div>
                      <p className="signup-body">{item.details}</p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <p>
            Already have an account <Link to="/login">Login here</Link>
          </p>
        </div>
      ) : (
        <Splash />
      )}
    </>
  );
}

export default Home;
