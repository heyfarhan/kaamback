import React, { useState } from "react";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

const JobSeekerSetting: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="p-10 flex flex-col gap-5 h-screen">
      <h1 className="text-3xl font-semibold">SMS Preferences</h1>
      <div className="border-2 border-gray-600 flex items-center md:w-4/6 md:h-16">
        <div className="flex md:gap-10 gap-5 w-1/2 px-5">
          <p className="text-lg">Recommendations & Reminders</p>
          <span className="text-3xl flex items-center cursor-pointer">
            {toggle ? (
              <LiaToggleOnSolid
                onClick={handleToggle}
                className="text-green-500"
              />
            ) : (
              <LiaToggleOffSolid onClick={handleToggle} />
            )}
          </span>
        </div>
        <p className="border-l-2 border-gray-600 h-full text-sm px-5 flex items-center py-1">
          Keep this on to receive offer recommendations & <br />
          timely reminders based on your interests
        </p>
      </div>
      <h1 className="text-3xl font-semibold mt-5">Change Password</h1>
      <div className="flex flex-col gap-5">
        <span className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="outline-none w-2/6 border-2 border-gray-600 p-1"
          />
        </span>
        <span className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="outline-none w-2/6 border-2 border-gray-600 p-1"
          />
        </span>
      </div>
      <button className="bg-[#041893] text-white rounded-lg mt-10 w-[180px] py-2 font-semibold">
        Confirm
      </button>
    </div>
  );
};

export default JobSeekerSetting;
