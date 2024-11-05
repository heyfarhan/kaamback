// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import CompanyNavbar from "../components/CompanyNavbar";
// import avatar from '../assets/avatar.png';
// import Footer from "../components/Footer";
// import FAQList from '../components/FAQList';
// import NewProjects from "../components/NewProjects";

// const CompanyDashboard = () => {

//     const navigate = useNavigate();
//     const [showModal, setShowModal] = useState(false);

//     const handleViewRole = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div className="flex flex-col mt-[70px] sm:pt-6">
//             <CompanyNavbar />

//             <div className="bg-[#BFE0FF] h-[180px] w-full px-4 sm:px-24 flex items-center">
//                 <div className="flex flex-row items-center gap-x-6">
//                     <img src={avatar} alt="avatar" className="h-[60px] w-[60px] rounded-full" />
//                     <p className="text-[24px] sm:text-[40px] font-semibold text-black font-ptSans">Hello, Name</p>
//                 </div>
//             </div>
//             <div className="flex flex-row gap-x-2 sm:gap-x-32 justify-center mt-[-24px]">
//                 <div
//                     className="px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer" onClick={handleViewRole}>
//                     <p className="text-[16px] sm:text-[24px] font-semibold text-white">New Projects</p>
//                 </div>
//                 <div
//                     className="px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer"
//                     onClick={() => navigate('/company-dashboard/your-projects')}>
//                     <p className="text-[16px] sm:text-[24px] font-semibold text-white">Your Projects</p>
//                 </div>
//                 <div
//                     className="px-[16px] py-[8px] bg-[#84bcf5] rounded-xl flex justify-center items-center cursor-pointer"
//                     onClick={() => navigate('/company-dashboard/your-hires')}
//                 >
//                     <p className="text-[16px] sm:text-[24px] font-semibold text-white">Your Hires</p>
//                 </div>
//             </div>
//             {showModal && <NewProjects onClose={handleCloseModal} />}
//             <div className="bg-white py-10 sm:py-20 px-4 sm:px-24">
//                 <FAQList />
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default CompanyDashboard;


import { Link } from 'react-router-dom';

import Logo from "../assets/logo.jpg"; // Import the logo
import NotificationIcon from "../assets/bell.png"; // Import notification icon
import MessageIcon from "../assets/message.png"; // Import message icon
import ProfileIcon from "../assets/profile.jpg"; // Import profile icon
import SearchIcon from "../assets/search.png"; // Import search icon

const Dashboard = () => {
  return (
    <div className="flex  font-[Arial, Helvetica, sans-serif]">
      {/* Sidebar */}
      <div className="bg-[#041893] w-72 text-white flex flex-col items-center py-5 font-bold  ">
        {/* Logo */}
        <img src={Logo} alt="KaamBack Logo" className="w-50 h-10 mb-12" /> {/* Adjusted logo size */}

        {/* Sidebar Menu */}
        <nav className="flex flex-col space-y-12"> {/* Increased space between menu items */}
        <Link to="/company-dashboard/create-job" className="flex items-center space-x-4">
            <span>Dashboard</span>
          </Link>

          <a href="/profile" className="flex items-center space-x-4">
            {/* <img src={ProfileIcon} alt="Profile" className="w-6 h-6" /> */}
            <span>Profile</span>
          </a>

          <a href="/messages" className="flex items-center space-x-4">
            {/* <img src={MessageIcon} alt="Messages" className="w-6 h-6" /> */}
            <span>Messages</span>
          </a>

          <a href="/search" className="flex items-center space-x-4">
            {/* <img src={SearchIcon} alt="Search" className="w-6 h-6" /> */}
            <span>Search</span>
          </a>
        </nav>

        <div className="mt-auto">
          <a href="/settings" className="mb-8">Settings</a>
          
        </div>

        <div className="mt-auto">
          
          <a href="/logout">Log out</a>
        </div>

      </div>
      

      {/* Main Content */}
      <div className="flex-grow p-8 bg-gray-100">
        {/* Search Bar & Icons */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white rounded-full py-2 px-4 w-80 shadow-md"
            />
            <img src={SearchIcon} alt="Search" className="absolute right-4 top-2 w-6 h-6" />
          </div>

          <div className="flex items-center space-x-6">
            <img src={NotificationIcon} alt="Notifications" className="w-6 h-6" />
            <img src={MessageIcon} alt="Messages" className="w-6 h-6" />
            <img src={ProfileIcon} alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Total Applications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Total Applications</h3>
            <p className="text-3xl font-bold mt-2">2564</p>
            <p className="text-blue-500 mt-1">70%</p>
          </div>

          {/* Total Shortlisted */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Total Shortlisted</h3>
            <p className="text-3xl font-bold mt-2">1658</p>
            <p className="text-green-500 mt-1">60%</p>
          </div>

          {/* Rejected Candidates */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Rejected Candidates</h3>
            <p className="text-3xl font-bold mt-2">845</p>
            <p className="text-red-500 mt-1">40%</p>
          </div>
        </div>

        {/* Middle Section - Job Offerings, Activity, New Applications */}
        <div className="grid grid-cols-3 gap-5 mt-8">
          {/* Job Offerings */}
          <div className="bg-blue-200 p-20 rounded-lg shadow-md text-center mr-12">
            <h2 className="text-2xl font-bold">Job Offerings</h2>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-white text-black-500 py-2 px-4 rounded-lg font-bold w-40">Create post</button>
              <button className="bg-white text-black-500 py-2 px-4 rounded-lg font-bold w-40">Edit post</button>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-full">
            <h3 className="font-bold text-lg text-white h-10">Activity</h3>
            <ul className="mt-4 space-y-4 font-bold">
              {['236 New Posts', '156 New Members', '166 New Groups', '125 Unsubscribers'].map((item) => (
                <li key={item} className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow-md">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New Applications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-4">New Applications</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
              <img src={ProfileIcon} alt="Profile" className="w-8 h-8 rounded-full" />
                <div>
                  <p>Anil Kapoor</p>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                </div>
              </li>
              {/* Add more list items for other applicants */}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Summary and Featured Companies */}
        <div className="grid grid-cols-2 gap-12 mt-8">
          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md mr-15">
            <h3 className="font-bold text-lg">Summary</h3>
            <p>UI/UX Designer - InVision/Sketch</p>
            <p className="text-sm text-purple-500 mt-2">Mar 16, 2024 | Placeminds Consulting Pvt. Ltd Talent Stock Solutions | Hiring for Leading Client</p>
            <p className="text-sm text-purple-500 mt-2"> Talent Stock Solutions | Hiring for Leading Client</p>

          </div>

          {/* Featured Companies */}
          <div className="bg-white p-6 rounded-lg shadow-md ml-20">
            <h3 className="font-bold text-lg mb-4">Featured Companies</h3>
            <ul className="space-y-4">
  <li>
    <div className="flex items-center space-x-4">
      <img src={ProfileIcon} alt="Profile" className="w-8 h-8 rounded-full" />
      <div>
        <p>HCL</p>
        <p className="text-sm text-gray-600">4 new posts | June 12, 2024</p>
      </div>
    </div>
  </li>

  <li>
    <div className="flex items-center space-x-4">
      <img src={ProfileIcon} alt="Profile" className="w-8 h-8 rounded-full" />
      <div>
        <p>Wipro</p>
        <p className="text-sm text-gray-600">8 new posts | July 21, 2024</p>
      </div>
    </div>
  </li>

  <li>
    <div className="flex items-center space-x-4">
      <img src={ProfileIcon} alt="Profile" className="w-8 h-8 rounded-full" />
      <div>
        <p>Accenture</p>
        <p className="text-sm text-gray-600">5 new posts | April 25, 2024</p>
      </div>
    </div>
  </li>
</ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

