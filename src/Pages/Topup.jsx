import { useState } from "react";

const TopUp = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTopUp = () => {
    // Add your top-up logic here
    alert(`You topped up user ${userId} with $${amount}.`);
  };

  return (
    <section className="py-16 h-screen px-10 ">
      <div className="container mx-auto">
        <div className="text-right mb-5">
          <a href="/topuphistory" className="btn bg-white hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-900  hover:text-white">
            Topup History
          </a>
        </div>
        <div className="w-full bg-white rounded-lg hover:shadow-xl hover:shadow-blue-900  md:w-2/3 mx-auto">
          <div className=" mb-8 shadow-md p-6 rounded-lg">
            <div className="">
              <h2 className="text-3xl text-bold text-center text-shadow">Topup</h2>
              <div className="text-center  text-base mt-5 text-shadow">Total Fund $20000</div>
            </div>
            <div className="">
              <form className="w-full">
                <div className="mb-4">
                  <label htmlFor="userId" className="block text-lg text-gray-700">
                    User ID:
                  </label>
                  <input
                    type="text"
                    id="userId"
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={handleUserIdChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="amount" className="block text-lg text-gray-700">
                    Enter Amount:
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleTopUp}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-xl hover:shadow-blue-900  "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUp;
