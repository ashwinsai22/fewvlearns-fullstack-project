import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://academy-api.bezawada.link/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        login();
        navigate('/blogs');
      } else {
        alert(data.message || 'Error logging in');
      }
    } catch (error) {
      alert('Error logging in');
    }
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return;
    }

    try {
      const response = await fetch('https://academy-api.bezawada.link/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        return data.token;
      }
    } catch (error) {}
  };

  const makeAuthenticatedRequest = async (url, options) => {
    let token = localStorage.getItem('token');
    if (!token) {
      token = await refreshToken();
      if (!token) {
        return;
      }
    }

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(url, options);
    if (response.status === 401) {
      token = await refreshToken();
      if (token) {
        options.headers.Authorization = `Bearer ${token}`;
        return fetch(url, options);
      }
    }
    return response;
  };

  return (
    <div className="flex items-center justify-center px-8 py-44 bg-black">
      <form className="bg-[#141414] shadow-lg p-8 rounded-lg w-full max-w-md" onSubmit={handleLogin}>
        <h2 className="text-2xl text-white mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none text-gray-900 focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none text-gray-900 focus:ring-2 focus:ring-red-600"
          />
        </div>

        <button
          type="submit"
          className="w-full border border-red-600 text-white hover:bg-red-600 hover:text-black py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
