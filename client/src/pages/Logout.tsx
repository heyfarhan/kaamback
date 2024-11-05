import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'; // Use the correct path for the logo

const LogOut: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <div className="bg-[#041893] w-64 text-white flex flex-col items-center py-6 font-bold">
      <Link to="/">
          <img src={Logo} alt="KaamBack Logo" className="w-50 h-10 mb-12" />{" "}
        </Link>

        <nav className="flex flex-col space-y-6 text-lg">
          <Link to="/company-dashboard/create-job" className="hover:text-gray-300">
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

      {/* Main Content - Log Out Confirmation */}
      <div className="flex-1 flex flex-col items-left justify-left  p-10">
        <h1 className="text-4xl font-bold mb-8">Are you sure you want to Log Out?</h1>
        <Link
          to="/logout"
          className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all duration-200 w-1/6 text-center font-bold"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default LogOut;