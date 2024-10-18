import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import "animate.css";
import signupimage from "../../../assets/loginimage.jpg";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleonChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const signUp = (e) => {
    e.preventDefault();
    alert("Submit is clicked");
  };
  return (
    <div>
      <div className="SignUp-container animate__animated animate__fadeIn">
        <div>
          <img src={signupimage} alt="" className="SignUp-image" />
        </div>
        <div className="Signup-data">
          {JSON.stringify(formValue)}
          <h1 className="SignUp-heading">New User</h1>
          <p className="SignUp-paragraph">
            Create your account to start shopping
          </p>
          <form action="" className="SignUp-form" onSubmit={signUp}>
            <label htmlFor="" className="SignUp-form-label">
              Full Name
            </label>
            <input
              required
              type="text"
              name="fullname"
              placeholder="Enter your Name"
              className="SignUp-form-input"
              onChange={handleonChange}
            />
            <label htmlFor="" className="SignUp-form-label">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="SignUp-form-input"
              onChange={handleonChange}
            />
            <label htmlFor="password" className="SignUp-form-label">
              Password
            </label>
            <div className="password-container">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                className="SignUp-form-input"
                id="passwordInput"
                onChange={handleonChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                <i
                  className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}
                ></i>
              </button>
            </div>

            <button type="submit">Sign up</button>
          </form>
          <div className="register-now">
            Already have an account ?{" "}
            <Link to="/log-in" className="Login">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
