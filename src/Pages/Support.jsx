import  { useState } from "react";

import Accordion from "../Components/Accordion";

const Support = () => {
  const [userId, setUserId] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleTicketNumberChange = (e) => {
    setTicketNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your support request logic here, using userId and ticketNumber
    alert(
      `Support request for User ID: ${userId}, Ticket Number: ${ticketNumber}`
    );
  };

  return (
    <div className="container justify-center h-screen mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-white mb-4">
        Support Page
      </h1>
      <div className="w-full bg-white p-20 hover:shadow-lg hover:shadow-blue-900  rounded-lg max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-gray-700 text-base font-semibold mb-2"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={userId}
              onChange={handleUserIdChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="1234564568989"
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ticketNumber"
              className="block text-gray-700 text-base font-semibold mb-2"
            >
              Support Ticket Number
            </label>
            <input
              type="text"
              id="ticketNumber"
              name="ticketNumber"
              value={ticketNumber}
              onChange={handleTicketNumberChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter Ticket Number"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-900  hover:text-white"
            >
              Support
            </button>
          </div>
        </form>
      </div>
      {/* <Accordion/> */}
    </div>
  );
};

export default Support;
