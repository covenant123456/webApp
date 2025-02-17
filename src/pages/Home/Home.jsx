import React from "react";
import { Link } from "react-router-dom";
import Splash from "../../components/Splash/Splash";
import Riderimg from "../../assets/Vector.png";
import Userimg from "../../assets/iconamoon_profile-light@2x.png";
import "./Home.css";

function Home() {
  const [removeSplash, setRemoveSplash] = React.useState(false);
  const [isPress, setIsPress] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setRemoveSplash(true);
    }, 5000);
  }, []);

  function handleClick() {
    setIsPress(true);
  }

  return (
    <>
      {removeSplash == true ? (
        <div>
          <section>
            <h1>Get Started with Logi</h1>
            <p>
              Choose your role to continue. Are you signing up as a Rider or as
              a User
            </p>
          </section>

          <div>
            <Link to="/onboard">
              <section
                onClick={handleClick}
                style={{ borderColor: isPress ? "#FF851B" : "#CCCCCC" }}
              >
                <div>
                  <img src={Riderimg} />
                </div>
                <div>
                  <div>
                    <p className="signup-head">Sign up as a Rider</p>
                  </div>
                  <div>
                    <p className="signup-body">
                      Earn money by delivering packages while enjoying the
                      flexibility to work at your convenience. Stay updated with
                      real-time job notifications and take control of your
                      schedule effortlessly.
                    </p>
                  </div>
                </div>
              </section>
            </Link>

            <Link to="/onboard">
              <section
                onClick={handleClick}
                style={{ borderColor: isPress ? "#0074D9" : "#CCCCCC" }}
              >
                <div>
                  <img src={Userimg} />
                </div>
                <div>
                  <div>
                    <p className="signup-head">Sign up as a User</p>
                  </div>
                  <div>
                    <p className="signup-body">
                      Send and track your deliveries effortlessly with a fast
                      and reliable network of riders. Enjoy a secure payment and
                      tracking system that ensures your packages reach their
                      destination safely and on time
                    </p>
                  </div>
                </div>
              </section>
            </Link>
          </div>

          <Link to="/login">
            <p>
              Already have an account <span>Login</span>
            </p>
          </Link>
        </div>
      ) : (
        <Splash />
      )}
    </>
  );
}

export default Home;
