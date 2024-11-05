import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineFilter } from "react-icons/hi";
import { Link } from "react-router-dom";
import money from "../../assets/money.jpg";
import withdraw from "../../assets/withdraw.jpg";
import projects from "../../assets/projects.jpg";
import ongoing from "../../assets/ongoing.jpg";
import { AuthContext } from "../../context/AuthContext";

const JobSeekerDashboard: React.FC = () => {
  const { freelancerData } = useContext(AuthContext);

  // console.log("details from hiring application submitted ", freelancerData);
  return (
    <div className="py-5">
      <div className="flex justify-end px-10">
        <div className="flex items-center justify-between gap-10 px-5 py-3 bg-white rounded-lg ">
          <Link to="#" className="text-3xl">
            {
              freelancerData?.profile ? (
                <img
                  src={freelancerData?.profile}
                  alt="profile"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                />
              ) :
              <CgProfile />
              }
          </Link>
          <span className="font-semibold hover:underline cursor-pointer">
            <p>
              <span className="text-sm">Username:</span>{" "}
              {freelancerData?.fullName}
            </p>
            <p>
              <span className="text-sm">Role:</span>{" "}
              {freelancerData?.primaryJob}
            </p>
          </span>
          <Link to="#" className="text-3xl">
            <IoNotifications />
          </Link>
        </div>
      </div>
      <div className="p-10 flex flex-col gap-10">
        <span>
          <h1 className="text-2xl font-bold">Hello,  {freelancerData?.fullName}</h1>
          <h3 className="text-lg text-gray-500 font-semibold">
            Check your activities in this dashboard
          </h3>
        </span>
        <div className="flex flex-wrap gap-10">
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={money} alt="money" className="w-10" />
            <span>
              <p>Earnings</p>
              <p>Rs.22,000</p>
              <p>+10.80%</p>
            </span>
          </div>
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={withdraw} alt="withdraw" className="w-10" />
            <span>
              <p>Withdraw</p>
              <p>Rs.10,000</p>
              <p>+10.80%</p>
            </span>
          </div>
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={projects} alt="projects" className="w-10" />
            <span>
              <p>Projects</p>
              <p>10</p>
              <p>+5.80%</p>
            </span>
          </div>
          <div className="flex gap-4 items bg-white p-5 rounded-lg ">
            <img src={ongoing} alt="ongoing" className="w-10" />
            <span>
              <p>Ongoing</p>
              <p>3</p>
              <p>+6.70%</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-white rounded-lg p-5 ml-10 mr-5">
        <div className="flex justify-between">
          <span className="mb-5">
            <h2 className="text-lg font-semibold">Projects</h2>
            <p className="text-gray-500 font-semibold">Overall Projects</p>
          </span>
          <div className="text-3xl">
            <HiOutlineFilter />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="flex justify-between w-4/6">
            <p>Dance Studio -Webpage</p>
            <p>Sriram Sarade</p>
            <p>CEO</p>
          </span>
          <div className="bg-[#041893] flex items-center justify-center px-3 py-1 text-center text-white rounded-full cursor-pointer">
            Completed
          </div>
        </div>
        <div className="flex justify-between p">
          <span className="flex justify-between w-4/6">
            <p>Dance Studio -Webpage</p>
            <p>Sriram Sarade</p>
            <p>CEO</p>
          </span>
          <div className="border border-[#041893] flex items-center justify-center px-4 py-1 rounded-full cursor-pointer">
            Ongoing
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
