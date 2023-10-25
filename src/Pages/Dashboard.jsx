import React from "react";
import Accountdetails from "../Components/Accountsdetails";
import BalanceCard from "../Components/BalanceCard";
import Smallcards from "../Components/Smallcards";
import DashCards from "../Components/DashCards";

const Dashboard = () => {
  const cardsData = [
    {
      imageurl:
        "https://cdn.iconscout.com/icon/free/png-256/free-add-money-1817245-1538119.png",
      title: "Deposit Balance",
      desc: "$0.00",
    },
    {
      imageurl: "https://cdn-icons-png.flaticon.com/512/1230/1230184.png",
      title: "Earn Balance",
      desc: "$4.50",
    },
    {
      imageurl: "https://cdn-icons-png.flaticon.com/512/6368/6368256.png",
      title: "Portfolio Balance",
      desc: "$10,000.00",
    },
    {
      imageurl: "https://cdn-icons-png.flaticon.com/512/4964/4964931.png",
      title: "Stake Token",
      desc: "$500.00",
    },
  ];
  const smcards = [
    {
      title: "Staking bounus",
      desc: "$500.00",
    },
    {
      title: "Leadership Bounus",
      desc: "$500.00",
    },
    {
      title: "Reward Bounus",
      desc: "$500.00",
    },
    {
      title: "Total Staked",
      desc: "$500.00",
    },
    {
      title: "Affilate Bounus",
      desc: "$100.00",
    },
    {
      title: "Team Bounus",
      desc: "$100.00",
    },
    {
      title: "Total Income",
      desc: "$500.00",
    },
    {
      title: "Wallet",
      desc: "$15000.00",
    },
    
  ];
  return (
    <div className="w-full mx-auto p-4  sm:p-8 md:p-12 lg:p-16">
      <div className="p-5 space-y-5 sm:flex sm:space-x-5">
        <Accountdetails />
        <BalanceCard />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {cardsData.map((card, index) => (
          <DashCards
            key={index}
            title={card.title}
            desc={card.desc}
            imageurl={card.imageurl}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {smcards.map((card, index) => (
          <Smallcards key={index} title={card.title} desc={card.desc} />
        ))}
      </div>

      <div className="text-center ">
        <label className="pr-5">Referal Link:</label>
        <input
          type="text"
          placeholder="dash/register/BG655025"
          className="input input-bordered w-full max-w-xs"
          disabled
        />
      </div>
    </div>
  );
};

export default Dashboard;
