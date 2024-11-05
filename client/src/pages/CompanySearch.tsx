import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import ProfilePic1 from "../assets/members/aryaman.jpg"; // Replace with real image paths
import ProfilePic2 from "../assets/members/karthik.png"; // Replace with real image paths
import ProfilePic3 from "../assets/members/shreya.png"; // Replace with real image paths

const CompanySearch: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };

  const companyListings = [
    {
      name: "Sampath Kumar",
      role: "UI/UX Designer",
      location: "Delhi",
      experience: "3 years",
      salary: "₹30,000 / month",
      image: ProfilePic1,
    },
    {
      name: "Hiresh Beria",
      role: "UI/UX Designer",
      location: "Noida",
      experience: "2 years",
      salary: "₹35,000 / month",
      image: ProfilePic2,
    },
    {
      name: "Karthik Kumar",
      role: "UI/UX Designer",
      location: "Bangalore",
      experience: "4 years",
      salary: "₹40,000 / month",
      image: ProfilePic3,
    },
  ];

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

        <div className="mt-auto flex flex-col items-center ">
          <Link to="/settings" className="mb-6  hover:text-gray-300 text-lg">
            Settings
          </Link>
          <Link to="/logout" className="text-lg hover:text-gray-300">
            Log out
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 p-10 gap-8">
        {/* Filters Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Role</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter role"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Desired minimum monthly Salary (₹)
            </label>
            <input
              type="range"
              className="w-full"
              min="0"
              max="60000"
              step="1000"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>₹0</span>
              <span>₹60K+</span>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold">47 UI/UX Designers</h2>
          <p className="text-gray-600">Latest UI/UX Roles</p>

          {companyListings.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{company.name}</h3>
                  <p className="text-gray-600">{company.role}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 5.373 10.163 6.586 11.414a1.992 1.992 0 002.828 0C13.627 19.163 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
                      </svg>
                      {company.location}
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22c1.103 0 2-.897 2-2h-4c0 1.103.897 2 2 2zM17 14V8c0-3.309-2.691-6-6-6S5 4.691 5 8v6l-2 2v1h18v-1l-2-2z" />
                      </svg>
                      {company.experience}
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {company.salary}
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                onClick={handleApplyClick}
              >
                Hire
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySearch;
