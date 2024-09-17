import React, { useState } from "react";
import { IoCloseOutline, IoPersonOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import upload from "../utils/upload";
import "../styles/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    picture: '', // Initialize with empty string
  });

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    
    if (file) {
      const uploadedUrl = await upload(file); // Get uploaded image URL from Cloudinary
      setData((prevData) => ({ ...prevData, picture: uploadedUrl })); // Set the picture URL in the state
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/auth/register", data);
      const { message } = res.data;

      if (res.status !== 200) {
        throw new Error(message);
      }

      setLoading(false);
      navigate('/login');
    } catch (e) {
      if (e.message === "User already exists") {
        setError("User already exists. Please use a different email.");
      } else {
        console.log(e.message);
      }
      setLoading(false);}
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className="wrapper">
        <div className="Register-box" id="register-box">
          <form onSubmit={registerUser}>
            <h1>Register</h1>
            <span className="icon-close" id="register-close">
              <IoCloseOutline />
            </span>

            <div className="input-box">
              <span className="icon">
                <IoPersonOutline />
              </span>
              <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
              <label>UserName</label>
            </div>
           
            <div className="input-box">
              <span className="icon">
                <IoMailOutline />
              </span>
              <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <IoLockClosedOutline />
              </span>
              <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required />
              <label>Password</label>
            </div>

            <div className="mb-5 flex items-center gap-3">
              {
                data.picture && (
                  <figure className="w-[60px] rounded-full border-2 border-solid flex items-center justify-center">
                    <img src={data.picture} alt="Profile Preview" className="w-full rounded-full" />
                  </figure>
                )
              }
            </div>
            <label htmlFor="profile-picture">Profile Picture</label>
            <input type="file" id="profile-picture" onChange={handleFileInput} />

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & Conditions
              </label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>

            <div className="login-link">
              <p>
                Already have an account? <Link to="/login">LogIn</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
