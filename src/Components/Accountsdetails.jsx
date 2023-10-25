import React from "react";

const Accountsdetails = () => {
  const today = new Date();

  return (
    <div className="w-full p-4 bg-white hover:shadow-xl hover:shadow-blue-900 rounded-lg">
      <div className="items-center justify-center">
        <h2 className="text-2xl sm:text-3xl pt-5 text-center font-semibold">Username</h2>
      </div>
      <div className="flex flex-wrap ">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="p-4 rounded-full hover:bg-blue-300">
            <h2 className="text-lg sm:text-xl text-center font-semibold">User ID</h2>
            <p className="text-center">1245456183</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <div className="p-4 rounded-full hover:bg-blue-300">
            <h2 className="text-lg sm:text-xl text-center font-semibold">Registration Date</h2>
            <p className="text-center">{today.toDateString()}</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
          <div className="p-4 rounded-full hover:bg-blue-300">
            <h2 className="text-lg sm:text-xl text-center font-semibold">Last Access</h2>
            <p className="text-center">{today.getHours()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountsdetails;
