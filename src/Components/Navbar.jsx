import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-28  bg-white bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-lg z-1000 dropdown-content mt-3 p-2 shadow bg-white   rounded-box w-52"
            >
              <Link to={"/"}>
                <li className="hover:bg-blue-400">
                  <a>Dashboard</a>
                </li>
              </Link>
              <Link to={"/profile"}>
                <li>
                  <a>Profile</a>
                </li>
              </Link>
              <Link to={"/changepassword"}>
                <li>
                  <a>Change Password</a>
                </li>
              </Link>
              <Link to={"/myteam"}>
                <li>
                  <a>My Team</a>
                </li>
              </Link>
              <Link to={"/myearning"}>
                <li>
                  <a>My Earning</a>
                </li>
              </Link>
              <Link to={"/addfunds"}>
                <li>
                  <a>Add Funds</a>
                </li>
              </Link>
              <Link to={"/topup"}>
                <li>
                  <a>Top Up</a>
                </li>
              </Link>
              <Link to={"/withdrawal"}>
                <li>
                  <a>Withdrawal</a>
                </li>
              </Link>
              <Link to={"/support"}>
                <li>
                  <a>Support</a>
                </li>
              </Link>
              <Link to={"/login"}>
                <li>
                  <a>Logout</a>
                </li>
              </Link>
                
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case  text-white text-2xl" href="/">Dashboard</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
