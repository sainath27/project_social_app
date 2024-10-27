import React from 'react';
import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
  
    const handleLogin = async (e) => {
      e.preventDefault();
      // Handle login logic here (e.g., call API or update state)
      try {
        const response = await fetch('/mock_login_data.json');
        const data = await response.json();
        const user = data.users.find(
          (u) => u.username === firstname && u.password === password
        );
  
        if (user) {
          navigate('/home'); // Successful login, navigate to homepage
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error('Error fetching mock data:', error);
      }

    };
  
    return (
      <div className="login-screen">
            <header className="header">
                <h1>Project Social</h1>
            </header>
            <main className="main-content">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="firstname"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="lastname"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p><a href="#">Forgot your password?</a></p>
                <p>Don't have an account? <a href="#">Sign up</a></p>
            </main>
      </div>
    );
  }

export default Login;