import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { AuthContext } from "../../context/AuthContext";

const JobSeekerProfile: React.FC = () => {
  const { freelancerData } = useContext(AuthContext);

  // console.log("details from hiring application submitted ", freelancerData);

  return (
    <div className="h-screen overflow-y-hidden">
      <div className="flex items-center justify-end p-5 gap-5">
        <IoNotifications className="text-2xl cursor-pointer" />
        {freelancerData?.profile ? (
          <img
            src={freelancerData?.profile}
            alt="profile"
            className="w-10 h-10 rounded-full flex items-center justify-center"
          />
        ) : (
          <CgProfile />
        )}
      </div>
      <div className="p-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Edit Profile</h2>
          <span className="flex flex-col items-center justify-center">
            <CgProfile className="text-6xl cursor-pointer" />
            <p className="text-sm cursor-pointer hover:underline">Edit Photo</p>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="flex flex-col mr-10 gap-1">
            <label htmlFor="fullName" className="font-semibold">
              Full legal name
            </label>
            <input
              type="text"
              id="fullName"
              className="outline-none border border-black p-1"
            />
          </span>
          <span className="flex flex-col mr-10 gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="outline-none border border-black p-1"
            />
          </span>
          <div className="flex justify-between items-center">
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="fieldOfExperience" className="font-semibold">
                Field of Experience
              </label>
              <input
                type="text"
                id="fieldOfExperience"
                className="outline-none border border-black p-1"
              />
            </span>
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="yearsOfExperience" className="font-semibold">
                Years of Experience in Primary Job Interest
              </label>
              <input
                type="text"
                id="yearsOfExperience"
                className="outline-none border border-black p-1"
              />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="country" className="font-semibold">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="outline-none border border-black p-1"
              />
            </span>
            <span className="flex flex-col mr-10 gap-1 w-full">
              <label htmlFor="city" className="font-semibold">
                City
              </label>
              <input
                type="text"
                id="city"
                className="outline-none border border-black p-1"
              />
            </span>
          </div>
          <span className="flex flex-col mr-10 gap-1">
            <label htmlFor="bio" className="font-semibold">
              Bio
            </label>
            <textarea
              id="bio"
              className="outline-none resize-none border border-black p-1 h-16"
            />
          </span>
        </div>
        <button className="mt-6 bg-[#041893] text-white px-3 py-1 rounded-lg">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
