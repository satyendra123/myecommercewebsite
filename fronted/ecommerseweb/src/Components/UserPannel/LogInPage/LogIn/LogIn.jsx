import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './LogIn.css'
import 'animate.css';
import signupimage from '../../../assets/loginimage.jpg'
const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault(); // Prevent default form action (submit)
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div>
            <div className="LogIn-container animate__animated animate__fadeIn">
                <div>
                    <img src={signupimage} alt="" className="LogIn-image"/>
                </div>
                <div className="LogIn-data">
                    <h1 className="LogIn-heading">Signin</h1>
                    <p className="LogIn-paragraph">Enter profile details to login</p>
                    <form action="" className="LogIn-form">
                           <label htmlFor="" className="LogIn-form-label">Email</label>
                           <input required type="text" name="email" placeholder="example@gmail.com" className="LogIn-form-input"/>
                           <label htmlFor="password" className="LogIn-form-label">Password</label>
    <div className="password-container">
        <input required type={showPassword ? "text" : "password"}  name="password" placeholder="Enter your Password" className="LogIn-form-input" id="passwordInput"/>
        <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
        <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
        </button>
    </div>
    
    <button type="submit">Login</button>
</form>
 <div className="login-now">
 Don't have an account ? <Link to="/sign-up" className="Register">register now</Link>
 </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
