import React, { useState } from 'react';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = () => {
    // Implement the logic to send a password reset email here.
    // You can make an API call to a server for this purpose.
    setMessage(`Password reset email sent to ${email}`);
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Forgot Password</h1>
        <p className="text-center mb-4">Enter your email address to reset your password.</p>
        {message && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
            {message}
          </div>
        )}
        <div className="mb-4">
          <input
            type="email"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleForgotPassword}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
