import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to homepage
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="dark:bg-white bg-gray-900 dark:text-gray-900 text-white p-8 rounded-2xl shadow-lg min-w-[800px] max-w-md min-h-[500px]">
        <h2 className="text-2xl font-bold text-center mb-6">Login to DevBlog</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
