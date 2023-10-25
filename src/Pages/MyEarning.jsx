import React from "react";
import DataTable from "../Components/DataTable"; // Ensure this path is correct

const MyEarning = () => {
  

  return (
    <div className="p-4 h-screen md:p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-4 md:mb-8">
        My Earning
      </h1>
      <div className="rounded-lg hover:shadow-lg bg-white w-auto hover:shadow-blue-900 p-4">
        <h2 className="text-2xl underline font-semibold text-center mb-4">
          Earning History
        </h2>
        <div className="container mx-auto mt-5">
          <DataTable/>
        </div>
      </div>
    </div>
  );
};

export default MyEarning;
