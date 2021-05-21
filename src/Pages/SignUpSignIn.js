import React, { useState } from "react";
import "./SignUpSignIn.css";
import { Link } from "react-router-dom";

function SignUpSignIn() {
  const [addClass, setClass] = useState(true);
  function toggleForm() {
    setClass((prev) => !prev);
  }
  return (
    <section className="authenticate">
      <div className={addClass ? "container" : "container active"}>
        <div className="user signinBx">
          <div className="imgBx">
            <div>
              <p className="heading">Welcome back</p>
              <p className="para">
                {" "}
                To keep connected with us please login with your personal
                information
              </p>
            </div>
          </div>
          <div className="formBx">
            <form action="">
              {/* onSubmit={} */}
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p className="signup">
                Don't have an account ?
                <Link to="#" onClick={() => toggleForm()}>
                  Sign Up.
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="">
              {/* onSubmit={} */}
              <h2>Create an account</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="email" name="" placeholder="Email Address" />
              <input type="password" name="" placeholder="Create Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <Link to="#" onClick={() => toggleForm()}>
                  Sign in.
                </Link>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <div>
              <p className="heading">Hello friend</p>
              <p className="para">
                Enter you personal details and start your journey with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpSignIn;
