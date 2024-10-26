import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/register`, 
        {
          username,
          name,
          contactNo,
          email,
          departmentName,
          branchName,
          instituteName,
          password,
          secretKey,
        }
      );

      alert('Registration Successful');
      onClose();
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={containerStyle}>
      <button style={closeButtonStyle} onClick={onClose}>✕</button>
      <h2 style={headingStyle}>Register</h2>
      <form onSubmit={handleRegister} style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Department Name"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Branch Name"
          value={branchName}
          onChange={(e) => setBranchName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Institute Name"
          value={instituteName}
          onChange={(e) => setInstituteName(e.target.value)}
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
        <input
          type="text"
          placeholder="Secret Key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          style={inputStyle}
          required
        />
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>Register</button>
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

export default Register;
