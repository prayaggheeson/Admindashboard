import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    number: 7877411484,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user information
  };

  return (
    <div className="p-10">
      <div className=" bg-white p-4 rounded-lg hover:shadow-lg hover:shadow-900">
        <h1 className="text-2xl font-bold text-center mb-4">Profile Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-black mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-black mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-black mb-2">Number</label>
            <input
              type="number"
              id="number"
              name="number"
              value={user.number}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button type="submit" className="btn hover:shadow-lg hover:shadow-blue-500 hover:bg-blue-500 hover:text-white">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
