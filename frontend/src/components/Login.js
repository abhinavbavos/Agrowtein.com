import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Login.css';
import Topbar from './Topbar'; // Ensure these paths are correct
import Navbar from './Navbar'; // Ensure these paths are correct

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await login(username, password);
      if (user && user.role) {
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } else {
        console.error('User role is not defined');
        setError('User role is not defined');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed: Invalid username or password');
    }
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
            <div className="login-icon">
              <i className="fa fa-user-circle"></i>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="login-input">
                <input
                  type="text"
                  placeholder="USERNAME"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="login-input">
                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="login-error">{error}</p>}
              <button type="submit" className="login-button">LOGIN</button>
            </form>
          </div>
          <div className="login-right">
            <h1>Welcome.</h1>
            <h3>  Agrowtein Labs Private Limited</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
