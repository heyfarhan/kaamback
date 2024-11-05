import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.jpg";

const EditProfile = () => {
  const handleProfilePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Handle the file upload, e.g., send it to the backend or update the state to show the new image
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-50 font-[Arial, Helvetica, sans-serif]">
      {" "}
      {/* Light blue background added */}
      {/* Sidebar */}
      <div className="bg-[#041893] w-64 text-white flex flex-col items-center py-5 font-bold">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="KaamBack Logo" className="w-50 h-10 mb-12" />{" "}
        </Link>
        {/* Sidebar Menu */}
        <nav className="flex flex-col space-y-8">
          <Link
            to="/company-dashboard/create-job"
            className="flex items-center space-x-4"
          >
            <span>Dashboard</span>
          </Link>

          <Link to="/profile" className="flex items-center space-x-4">
            <span>Profile</span>
          </Link>

          <Link to="/messages" className="flex items-center space-x-4">
            <span>Messages</span>
          </Link>

          <Link to="/search" className="flex items-center space-x-4">
            <span>Search</span>
          </Link>
        </nav>

        <div className="mt-auto flex flex-col items-center">
          <Link to="/settings" className="mb-8">
            Settings
          </Link>
          <Link to="/logout">Log out</Link>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-grow p-10">
        {/* Top Bar with Bell & Profile Icons */}
        <div className="flex justify-end mb-4 space-x-4">
          <FaBell className="text-gray-600 w-6 h-6 cursor-pointer" />
          <FaUserCircle className="text-gray-600 w-8 h-8 cursor-pointer" />
        </div>

        {/* Align "Edit Profile" and Profile Photo */}
        <div className="flex justify-between items-center mb-6 ml-20 ">
          <h2 className="text-3xl font-semibold">Edit Profile</h2>
          <div className="relative w-20 h-20 mr-20">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleProfilePhotoUpload}
            />
            <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center relative shadow-md">
              <FaUserCircle className="text-gray-600 w-12 h-12" />{" "}
              {/* Profile photo placeholder */}
            </div>
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-blue-500 hover:underline cursor-pointer">
              Edit Photo
            </p>
          </div>
        </div>

        <div className="mx-auto w-3/4">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Field of Experience
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>HR</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Years of Experience in Primary Job Interest
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter years of experience"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter country"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter city"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Bio
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Tell us about yourself"
              ></textarea>
            </div>

            {/* Moved the button near the sidebar */}
            <div className="text-left">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
