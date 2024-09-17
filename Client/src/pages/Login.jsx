import React, { useState, useContext } from "react";
import { IoCloseOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { authContext } from '../context/AuthContext.jsx';

export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [data, setData] = useState({
    email: '',   
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post("http://localhost:8000/auth/login", data);
      const { result } = res.data;  // The backend will return a token

      if (res.status === 200) {
        // Save token to localStorage or context for authorization
        localStorage.setItem('token', token);

        
  
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: result.data,
            token: token,
          },
        });
        


        // Redirect user to home page
        navigate('/');

      } else {
        throw new Error(res.data.message);
      }

      setLoading(false);
    } catch (e) {
      setError(e.response?.data?.message || "Login failed. Please try again.");
      setLoading(false);
      
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className="wrapper">
        <div className="login-box" id="login-box">
          <form onSubmit={loginUser}>
            <h2 >LogIn</h2>
            <span className="icon-close" id="login-close">
              <IoCloseOutline />
            </span>

            <div className="input-box">
              <span className="icon">
                <IoMailOutline />
              </span>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <IoLockClosedOutline />
              </span>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
              <label>Password</label>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {error && <p className="error-message">{error}</p>}

            <div className="register-link">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
