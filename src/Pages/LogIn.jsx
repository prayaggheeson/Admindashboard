import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to authenticate the user (e.g., send an API request).
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4">
        <form onSubmit={handleSubmit} className="bg-white hover:shadow-lg hover:shadow-blue-900  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700  font-semibold mb-2">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700  font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 hover:shadow-lg hover:shadow-blue-500 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
            <a href="/forgot-password" className="text-blue-500 text-sm ">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
