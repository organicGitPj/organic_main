import React from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";


function Login(props) {
  return (
    <div className={classes.row}>
      <div className="col-md-6 mx-auto p-0">
        <div className={classes.card}>
          <div className={classes.login_box}>
            <div className="classes.login_snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className={classes.Sign_up}
                checked
              />
              <label htmlFor="tab-1" className={classes.tab}>
                Login
              </label>

              <div className={classes.login_space}>
                <div className={classes.login}>
                  <form action="" id="tab-1" method="POST">
                    <div className={classes.group}>
                      {" "}
                      <label htmlFor="user" className={classes.label}>
                        Username
                      </label>
                      <input
                        id="user"
                        type="text"
                        className={classes.input}
                        placeholder="Enter your username"
                      />
                    </div>
                    <div className={classes.group}>
                      {" "}
                      <label htmlFor="pass" className={classes.label}>
                        Password
                      </label>
                      <input
                        id="pass"
                        type="password"
                        className={classes.input}
                        datatype="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className={classes.group}>
                      {" "}
                      <input
                        id="check"
                        type="checkbox"
                        className={classes.checked}
                      />
                      <label htmlFor="check">
                        <span className={classes.icon} /> Keep me Signed in{" "}
                      </label>
                    </div>
                    <div className={classes.group}>
                      {" "}
                      <input
                        type="submit"
                        className={classes.button}
                        value="Sign In"
                      />{" "}
                    </div>
                    <div className={classes.hr} />
                    <div className={classes.foot}>
                      {" "}
                      <a href="https://www.youtube.com/">
                        Forgot Password?
                      </a>{" "}
                      
                    </div>
                    <div className={classes.foot}>
                      {" "}
                      <li>
                        <Link to="/"> signup </Link>
                      </li>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
