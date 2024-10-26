import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onClose , setIsAuthorized }) => {
  const [enrollment, setEnrollment] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username: enrollment,
        password,
      });

      alert('Login Successful');
      onClose();
      if (response.status === 200) {
        setIsAuthorized(true); // Set authorized on successful login
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={containerStyle}>
      <button style={closeButtonStyle} onClick={onClose}>✕</button>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        <input
          type="text"
          placeholder="Enrollment ID"
          value={enrollment}
          onChange={(e) => setEnrollment(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

// Inline styles
const containerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
};

const closeButtonStyle = {
  color: '#000',
  position: 'absolute',
  top: '5px',
  right: '5px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '18px',
};

const headingStyle = { fontSize: '24px', marginBottom: '20px' };

const formStyle = { display: 'flex', flexDirection: 'column' };

const inputStyle = {
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const errorStyle = { color: 'red', marginBottom: '10px' };

export default Login;
