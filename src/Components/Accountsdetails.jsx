import { useState } from "react";

const Accountsdetails = () => {
  const today = new Date();
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      alert("Connected");
      setWalletAddress(accounts[0]);
      console.log("Connected", accounts[0]);

      const balance = await ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      console.log(balance);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full p-4 bg-white hover:shadow-xl hover:shadow-blue-900 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 sm:mb-0">
        <h2 className="text-2xl sm:text-3xl pt-5 text-center sm:text-start font-semibold">
          Username
        </h2>
        <button
          className="bg-blue-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700 text-white px-6 py-2 rounded-lg mr-4"
          onClick={connectWallet}
        >
          connect Wallet
        </button>
      </div>

      <div className="flex flex-wrap ">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="p-4 rounded-full justify-center hover:bg-blue-300">
            <h2 className="text-xl font-semibold">
              {walletAddress ?` ${walletAddress.substring(0, 15)}...` : "Not Connected"}
            </h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <div className="p-4 rounded-full hover:bg-blue-300">
            <h2 className="text-lg sm:text-xl text-center font-semibold">
              Registration Date
            </h2>
            <p className="text-center">{today.toDateString()}</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <div className="p-4 rounded-full hover:bg-blue-300">
            <h2 className="text-lg sm:text-xl text-center font-semibold">
              Last Access
            </h2>
            <p className="text-center">{today.getHours()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountsdetails;
