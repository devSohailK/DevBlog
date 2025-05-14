import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Optional: Set display name
      await updateProfile(userCredential.user, {
        displayName: name
      });

      navigate('/');
    } catch (err) {
      console.error(err.message);
      setError('Signup failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="dark:bg-white bg-gray-900 text-white dark:text-gray-900 p-8 rounded-2xl shadow-lg min-w-[800px] max-w-md min-h-[500px]">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 text-gray-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              className="w-full px-4 text-gray-950 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
