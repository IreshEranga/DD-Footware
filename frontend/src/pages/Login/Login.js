import React, { useState } from 'react';
import axios from 'axios';
import '../Login/Login.css';
import NavBar from '../../components/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      // Handle successful login (e.g., redirect to another page or show a success message)
      console.log('Login successful:', response.data);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <NavBar />
      <div className="login-container" style={{ marginTop: '150px', padding:'30px'}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{marginTop:'30px', width:'450px'}}>
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
