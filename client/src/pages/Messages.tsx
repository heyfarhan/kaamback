import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.jpg";

const Messages: React.FC = () => {
  return (
    <div className="flex h-screen bg-indigo-50">
      {/* Sidebar */}
      <div className="bg-[#041893] w-72 text-white flex flex-col items-center py-5 font-bold ">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="KaamBack Logo" className="w-50 h-10 mb-12" />{" "}
        </Link>
        {/* Adjusted logo size */}
        {/* Sidebar Menu */}
        <nav className="flex flex-col space-y-12">
          {" "}
          {/* Increased space between menu items */}
          <Link
            to="/company-dashboard/create-job"
            className="flex items-center space-x-4"
          >
            <span>Dashboard</span>
          </Link>
          <a href="/profile" className="flex items-center space-x-4">
            <span>Profile</span>
          </a>
          <a href="/messages" className="flex items-center space-x-4">
            <span>Messages</span>
          </a>
          <a href="/search" className="flex items-center space-x-4">
            <span>Search</span>
          </a>
        </nav>
        <div className="mt-auto">
          <a href="/settings" className="mb-8">
            Settings
          </a>
        </div>
        <div className="mt-auto">
          <a href="/logout">Log out</a>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow p-8 space-y-6">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center w-1/3">
          {" "}
          {/* Reduced width */}
          <input
            type="text"
            placeholder="Search"
            className="w-full text-lg focus:outline-none"
          />
        </div>

        {/* New Applications */}
        <div className="bg-white rounded-xl shadow-md p-6 w-1/3">
          {" "}
          {/* Reduced width */}
          <h2 className="text-xl font-bold mb-4">New Applications</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img
                src="/path/to/user1.jpg"
                alt="Anil Kapoor"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Anil Kapoor</p>
                <p className="text-gray-500">Applied for UI/UX Designer</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/path/to/user2.jpg"
                alt="Charan Adithya"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Charan Adithya</p>
                <p className="text-gray-500">Applied for .Net Developer</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/path/to/user3.jpg"
                alt="Mary Adaline"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Mary Adaline</p>
                <p className="text-gray-500">Applied for Content Writer</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src="/path/to/user4.jpg"
                alt="Afraz Alam"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Afraz Alam</p>
                <p className="text-gray-500">Applied for IOS Developer</p>
              </div>
            </li>
          </ul>
        </div>

        {/* People Section */}
        <div className="bg-white rounded-xl shadow-md p-6 w-1/3">
          {" "}
          {/* Reduced width */}
          <h2 className="text-xl font-bold mb-4">People</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img
                  src="/path/to/user1.jpg"
                  alt="Akhil"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Akhil</p>
                  <p className="text-gray-500">Thank you!</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">Today, 8:36pm</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img
                  src="/path/to/user2.jpg"
                  alt="Intern"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Intern</p>
                  <p className="text-gray-500">Got it.</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">Today, 12:11pm</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img
                  src="/path/to/user3.jpg"
                  alt="Mary"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Mary</p>
                  <p className="text-gray-500">Yes.</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">Today, 2:40pm</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Messages;
