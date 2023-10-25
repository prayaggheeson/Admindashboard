import React, { useState } from 'react';

const Withdrawal = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawAddress, setWithdrawAddress] = useState('');

  const handleWithdraw = () => {
    // Handle the withdrawal logic here
    console.log('Withdrawal requested:', withdrawAmount, 'to address', withdrawAddress);
    // You can implement API calls or further logic to process withdrawals
  };

  return (
    <div className="container mx-auto h-screen p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-4xl font-semibold text-white text-center mb-4">Withdraw Funds</h2>
        <div className="bg-white rounded-lg hover:shadow-lg hover:shadow-blue-900 p-4">
          <div className="mb-4">
            <label htmlFor="amount" className="block text-base font-medium text-gray-700">Amount (Crypto)</label>
            <input
              type="text"
              id="amount"
              className="w-full px-4 py-2 rounded-lg border  focus:ring focus:ring-blue-200"
              placeholder="Enter the withdrawal amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-base font-medium text-gray-700">Withdrawal Address</label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Enter the withdrawal address"
              value={withdrawAddress}
              onChange={(e) => setWithdrawAddress(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900 text-white px-6 py-3 rounded-lg"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
