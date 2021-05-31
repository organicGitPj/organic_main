import React from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

function Signup(props) {
    function submitHandler(event) {
        event.preventDefault();

        const signupdata = { 'name': 'ashlesh', 'password': 'ashu' }
        props.onsignup(signupdata)
        
    }
  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className={classes.card}>
          <div className={classes.login_box}>
            <div className="classes.login_snip">
              <div className={classes.sign_up_form}>
                <form action="" method="post" onSubmit={submitHandler}>
                  <div className={classes.group}>
                    <label htmlFor="username" className={classes.label}>
                      Username
                    </label>
                    <input
                      name="user"
                      type="text"
                      className={classes.input}
                      placeholder="Create your Username"
                    />
                  </div>

                  <div className={classes.group}>
                    <label htmlFor="pass" className={classes.label}>
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className={classes.input}
                      datatype="password"
                      placeholder="Create your password"
                    />
                  </div>

                  <div className={classes.group}>
                    <label htmlFor="pass" className={classes.label}>
                      Repeat Password
                    </label>
                    <input
                      name="repassword"
                      type="password"
                      className={classes.input}
                      datatype="password"
                      placeholder="Repeat your password"
                    />
                  </div>

                  <div className={classes.group}>
                    <label htmlFor="pass" className={classes.label}>
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className={classes.input}
                      placeholder="enter your name"
                    />
                  </div>

                  <div className={classes.group}>
                    <label htmlFor="pass" className={classes.label}>
                      Phone number
                    </label>
                    <input
                      name="phone"
                      type="number"
                      className={classes.input}
                      placeholder="enter your phone number"
                    />
                  </div>

                  <div className={classes.group}>
                    <label htmlFor="pass" className={classes.label}>
                      DOB
                    </label>
                    <input
                      name="dob"
                      type="date"
                      className={classes.input}
                      placeholder="your DOB"
                    />
                  </div>

                  <div className={classes.group}>
                    <label htmlFor="pass" className={classes.label}>
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className={classes.input}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className={classes.group}>
                    {" "}
                    <input
                      type="submit"
                      className={classes.button}
                      value="Sign Up"
                    />
                  </div>
                </form>
                <div className={classes.hr} />
                <div className={classes.foot}>
                  <li>
                    <Link to="login"> Already a member </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
