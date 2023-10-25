import  { useState } from "react";

const AddFunds = () => {
  const [amount, setAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleWalletChange =(e) => {
    setWalletAddress(e.target.value);
  }

  const handleAddFunds = () => {
    // Add your fund deposit logic here
    alert(`You added $${amount} to your account.`);
  };

  return (
    <div className="h-screen p-10 flex flex-col items-center justify-center">
      
      <div className="w-full md:w-1/2 mx-auto">
        <h1 className="text-4xl font-semibold text-center text-white mb-4">Add Funds</h1>
        <div className="bg-white p-6 rounded-md hover:shadow-xl hover:shadow-blue-900 ">
          <div className="mb-4">
            <label htmlFor="amount" className="block text-lg text-gray-700">
              Amount (in USD):
            </label>
            <input
              type="number"
              id="amount"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={amount}
              onChange={handleAmountChange}
            />
            <label htmlFor="amount" className="block text-lg text-gray-700">
             Wallet Address:
            </label>
            <input
              type="text"
              id="wallet Address"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={walletAddress}
              onChange={handleWalletChange}
            />
          </div>
          <button
            className="bg-blue-500 text-white hover:shadow-xl hover:shadow-blue-500  py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleAddFunds}
          >
            Add Funds
          </button>
         
        </div>
        
      </div>
    </div>
  );
};

export default AddFunds;
