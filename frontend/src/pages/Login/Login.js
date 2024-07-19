import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import '../Login/Login.css';
import NavBar from '../../components/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update the URL if your backend is running on a different port or domain
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });

      const { token, role } = response.data;
      localStorage.setItem('token', token); // Store token in local storage

      // Navigate based on user role
      if (role === 'system admin') {
        navigate('/systemadmin'); // Update with your system admin route
      } else if (role === 'outlet admin') {
        navigate('/outletadmin'); // Update with your outlet admin route
      } else {
        toast.error('Access denied'); // Show toast message
      }

    } catch (err) {
      setError('Invalid email or password');
      toast.error('Invalid email or password'); // Show toast message
    }
  };

  return (
    <>
      <NavBar />
      <div className="login-container" style={{ marginTop: '150px', padding: '30px' }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ marginTop: '30px', width: '450px' }}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;
