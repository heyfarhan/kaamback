import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"; // Use the correct path for the logo

const CompanySettings: React.FC = () => {
  const [smsPreferences, setSmsPreferences] = useState(true);

  const handleSmsToggle = () => {
    setSmsPreferences(!smsPreferences);
  };

  return (
    <div className="flex min-h-screen bg-blue-50 font-[Arial, Helvetica, sans-serif]">
      {/* Sidebar */}
      <div className="bg-[#041893] w-64 text-white flex flex-col items-center py-6 font-bold">
        <Link to="/">
          <img src={Logo} alt="KaamBack Logo" className="w-50 h-10 mb-12" />{" "}
        </Link>

        <nav className="flex flex-col space-y-6 text-lg">
          <Link
            to="/company-dashboard/create-job"
            className="hover:text-gray-300"
          >
            Dashboard
          </Link>
          <Link to="/profile" className="hover:text-gray-300">
            Profile
          </Link>
          <Link to="/messages" className="hover:text-gray-300">
            Messages
          </Link>
          <Link to="/search" className="hover:text-gray-300">
            Search
          </Link>
        </nav>

        <div className="mt-auto flex flex-col items-center">
          <Link to="/settings" className="mb-6 hover:text-gray-300 text-lg">
            Settings
          </Link>
          <Link to="/logout" className="text-lg hover:text-gray-300">
            Log out
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* SMS Preferences Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SMS Preferences</h2>
          <div className="flex items-center justify-between">
            <span className="text-lg">Recommendations & Reminders</span>
            {/* Updated Toggle Design */}
            <label className="inline-flex items-center cursor-pointer mr-10">
              <input
                type="checkbox"
                checked={smsPreferences}
                onChange={handleSmsToggle}
                className="sr-only"
              />
              <div
                className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out transition-all ${
                  smsPreferences ? "bg-blue-600" : "bg-gray-400"
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                    smsPreferences ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Keep this on to receive offer recommendations & timely reminders
            based on your interests.
          </p>
        </div>

        {/* Change Password Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Change Password</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm new password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySettings;
