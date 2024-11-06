import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CSS/Login.css';
import signupBanner from '../Components/Assets/signupBanner.svg'; // Replace this with the actual image path

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log('Login Function Executed', formData);
    let responseData;
    
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors); // You can still display the error message here if needed
      }
    } catch (error) {
      console.error('Error during login:', error);
      navigate('/error'); // Redirect to error page
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={signupBanner} alt="Shopping" />
      </div>
      <div className='login-details'>
        <div className="login-form">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <div className="login-fields">
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="login-button" onClick={login}>
            Log In
          </button>
          <p className="forgot-password">
            <span onClick={() => alert("Redirect to password recovery")}>Forget Password?</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
