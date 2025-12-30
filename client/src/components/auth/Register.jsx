import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://academy-api.bezawada.link/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
      });
      if (response.ok) {
        alert('Registration successful!');
        onLogin();
        navigate('/login');
      } else {
        alert('Error registering user');
      }
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div className="flex items-center justify-center px-8 py-32 bg-black">
      <form
        onSubmit={handleRegister}
        className="bg-[#141414] shadow-lg p-8 rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl text-white mb-6 text-center">Register</h2>

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
            className="w-full px-3 py-2 text-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
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
            className="w-full px-3 py-2 text-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <button
          type="submit"
          className="w-full border border-red-600 text-white hover:bg-red-600 hover:text-black py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
