import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
const LandingPage = ({setIsAuthorized}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: '20px',
  };

  const subheadingStyle = {
    fontSize: '24px',
    color: '#6c757d',
    marginBottom: '40px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const loginButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>SVVV Inventory Management</h1>
      <p style={subheadingStyle}>
        Manage your inventory efficiently with our powerful system.
      </p>
      <button style={buttonStyle} onClick={() => setShowLogin(true)}>Login</button>
      <button style={loginButtonStyle} onClick={() => setShowRegister(true)}>Register</button>

      {showLogin && <Login setIsAuthorized={setIsAuthorized} onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default LandingPage;
