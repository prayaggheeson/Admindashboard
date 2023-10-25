import React from "react";

const BalanceCard = () => {
  return (
    <div className="w-full p-4 bg-white hover:shadow-xl hover:shadow-blue-900 rounded-lg ">
      <div className="text-2xl sm:text-3xl text-black text-center mb-4">Account Balance</div>
      <div className="text-3xl sm:text-4xl font-bold text-black text-center">$89,400</div>
      <div className="mt-4 flex justify-center">
        <button className="bg-green-500 hover:bg-green-700 hover:shadow-lg hover:shadow-green-700 text-white px-6 py-2 rounded-lg mr-4">
          Add Funds
        </button>
        <button className="bg-red-500 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700 text-white px-6 py-2 rounded-lg">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
