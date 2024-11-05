import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa"; // Importing the check mark icon
import topClient from "../../assets/top-clients.jpg";
import flexibleWork from "../../assets/flexible-work.jpg";
import financialStability from "../../assets/financial-stability.jpg";
import Navbar from "../../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const HiringProcess: React.FC = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Set currentStep based on the path
  useEffect(() => {
    switch (location.pathname) {
      case "/hiring/set-company/gettingStarted":
        setCurrentStep(1);
        break;
      case "/hiring/set-company/professionalExperience":
        setCurrentStep(2);
        break;
      case "/hiring/set-company/profileSetup":
        setCurrentStep(3);
        break;
      default:
        setCurrentStep(1);
    }
  }, [location.pathname]);

  // Function to render step indicators
  const renderStepIndicator = (stepNumber: number): JSX.Element => {
    if (stepNumber < currentStep) {
      return (
        <div className="h-10 w-10 bg-green-500 text-white rounded-full flex justify-center items-center">
          <FaCheck />
        </div>
      );
    } else if (stepNumber === currentStep) {
      return <div className="h-10 w-10 bg-[#041893] rounded-full"></div>;
    } else {
      return (
        <div className="h-10 w-10 border border-gray-500 rounded-full"></div>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex mt-10 md:mt-14">
        <div className="w-full">
          <div className="border-b-2 border-gray-500 flex py-5 gap-20 pl-20">
            {/* Step indicators */}
            <div className="flex items-center gap-2">
              {renderStepIndicator(1)}
              <span className="text-lg font-semibold">Getting Started</span>
            </div>
            <div className="flex items-center gap-2">
              {renderStepIndicator(2)}
              <span className="text-lg font-semibold">Company Experience</span>
            </div>
            <div className="flex items-center gap-2">
              {renderStepIndicator(3)}
              <span className="text-lg font-semibold">Company Profile</span>
            </div>
          </div>

          <div className="px-10 pt-5">
            <Outlet />
          </div>
        </div>

        <div className="border-l-2 border-gray-500 px-10 pt-7 flex flex-col gap-5 min-h-screen w-[25%]">
          <div className="flex flex-col gap-2">
            <img src={topClient} alt="Top Clients" className="w-16" />
            <p className="font-bold">Top Clients</p>
            Engage with Fortune 500 companies, big tech firms, Silicon Valley
            startups, and renowned universities.
          </div>
          <div className="flex flex-col gap-2">
            <img src={flexibleWork} alt="Flexible Work" className="w-16" />
            <p className="font-bold">Flexible work</p>
            Work remotely whenever you want from almost anywhere in the world.
            Choose from full-time, part-time, or hourly engagements.
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={financialStability}
              alt="Financial Stability"
              className="w-16"
            />
            <p className="font-bold">Financial Stability</p>
            Set your own rate, get access to jobs with guaranteed hours, and
            make the most of continuous opportunities.
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringProcess;
