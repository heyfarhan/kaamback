import React from 'react';
import Navbar from "../components/Navbar";
// import JobOpening from "../components/Jobopening";


const ApplicationSubmission: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-top">

      <Navbar/>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center mt-28">
        <div className="text-4xl mb-4 text-green-500">✔️</div>
        <h1 className="text-2xl font-bold mb-4">Application Submitted</h1>
        <p className="text-gray-700 mb-4">
          Nice work! You successfully applied to <span className="font-semibold">KaamBack</span>.
        </p>
        <p className="text-gray-700 mb-6">
          We’ll review your application and get back to you as soon as possible.
        </p>
        <p className="font-semibold text-gray-800">Good luck!</p>
        <p className="text-gray-600">KaamBack Team</p>
      </div>
    </div>
  );
};

export default ApplicationSubmission;