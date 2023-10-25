import React, { useState } from "react";

const tableHeaders = ["ID", "Name", "Job", "Earning income"];
const tableData = [
  [1, "Cy Ganderton", "Quality Control Specialist", "$5008"],
  [2, "Hart Hagerty", "Desktop Support Technician", "$200"],
  [3, "Brice Swyre", "Tax Accountant", "$55"],
  [4, "Brice Swyre", "Tax Accountant", "$123"],
  [5, "Brice Swyre", "Tax Accountant", "$500"],
  [6, "Brice Swyre", "Tax Accountant", "$88"],
  
];

function DataTable() {
  const [data, setData] = useState(tableData);

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
      <table className="w-full">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className="text-left p-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
