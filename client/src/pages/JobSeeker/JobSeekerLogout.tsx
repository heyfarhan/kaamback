import React from 'react';

const JobSeekerLogout: React.FC = () => {
  return (
    <div className='p-10 h-screen'>
      <h1 className="text-3xl font-semibold">Are you sure you want to logout?</h1>
      <button className="bg-[#041893] text-white rounded-lg mt-10 w-[180px] py-2 font-semibold">
        Logout
      </button>
    </div>
  );
};

export default JobSeekerLogout;
