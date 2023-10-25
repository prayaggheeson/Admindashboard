import React from "react";
import DataTable from "../Components/DataTable";

const TopupHistory = () => {
  return (
    <div className="p-4 h-screen sm:p-8 md:p-12 lg:p-16 ">
      <div className="rounded-lg hover:shadow-lg bg-white hover:shadow-blue-900 p-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
          Top-up History
        </h2>
        <div className="container mx-auto mt-5">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default TopupHistory;
