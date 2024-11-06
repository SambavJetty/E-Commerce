import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CSS/Signup.css';
import signupBannerimg from '../Components/Assets/signupBanner.svg'; // Replace this with the actual image path
import googleSignupimg from '../Components/Assets/googleSignup.svg'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    console.log('Signup Function Executed', formData);
    let responseData;
    
    try {
      const response = await fetch('http://localhost:4000/signup', {
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
      console.error('Error during signup:', error);
      navigate('/error'); // Redirect to error page
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={signupBannerimg} alt="Shopping" />
      </div>
      <div className='signup-details'>
        <div className="signup-form">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <div className="signup-fields">
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Name"
            />
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
          <button className="signup-button" onClick={signup}>
            Create Account
          </button>
          <div className="google-signup">
            <img src={googleSignupimg} alt="Google Icon" />
          </div>
          <p className="signup-login">
            Already have an account? 
            <span 
              onClick={() => window.location.replace('/login')} 
              style={{ display: 'inline-block', position: 'relative' }}
            >
              Log in
              <hr style={{ margin: 0, border: '0', borderTop: '1px solid #000', position: 'absolute', left: 0, right: 0, bottom: '-4px' }} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
