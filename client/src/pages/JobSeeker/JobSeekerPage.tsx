import React from "react";
import { Link, Outlet } from "react-router-dom";

const JobSeekerPage: React.FC = () => {
  return (
    <div className="bg-[#041893] h-full lg:h-screen flex">
      <nav className="text-white flex flex-col md:w-1/5 w-2/5 items-center justify-between">
        <ul className="flex flex-col text-center w-full gap-5 mt-5 px-5">
          <li className="text-xl font-bold">
            <Link to="/">KaamBack</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893] py-1 hover:rounded-lg">
            <Link to="/jobseeker/dashboard">Dashboard</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893] py-1 hover:rounded-lg">
            <Link to="/jobseeker/profile">Profile</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893] py-1 hover:rounded-lg">
            <Link to="/jobseeker/messages">Messages</Link>
          </li>
        </ul>
        <ul className="flex flex-col text-center w-full px-5 gap-5 mb-10">
          <li className="font-bold hover:bg-white hover:text-[#041893] py-1 hover:rounded-lg">
            <Link to="/jobseeker/setting">Settings</Link>
          </li>
          <li className="font-bold hover:bg-white hover:text-[#041893] py-1 hover:rounded-lg">
            <Link to="/jobseeker/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <div className="w-full bg-[#EAEBFF] rounded-l-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default JobSeekerPage;
