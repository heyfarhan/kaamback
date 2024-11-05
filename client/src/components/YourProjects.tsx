import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "./Footer";

const ProjectsWithoutRecruitment = () => {

  const hiresData = [
    { projectName: 'Project Alpha', type: 'UI/UX Design', days: 30, fee: '20,000' },
    { projectName: 'Project Beta', type: 'UI/UX Design', days: 45, fee: '30,000' },
    { projectName: 'Project Gamma', type: 'Business', days: 60, fee: '40,000' },
    { projectName: 'Project Delta', type: 'Business', days: 20, fee: '15,000' },
    { projectName: 'Project Delta', type: 'UI/UX Design', days: 20, fee: '15,000' },
  ];

  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>(Array(hiresData.length).fill(false));

  const toggleDropdown = (index: number) => {
    const newDropdownVisible = dropdownVisible.map((item, idx) => (idx === index ? !item : false));
    setDropdownVisible(newDropdownVisible);
  };

  return (
    <>
      <div className="flex flex-row justify-between mt-10 text-center">
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Project name</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Type of occupation</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Days</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Fee</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-[0.4]"></p>
      </div>
      {hiresData.map((hire, index) => (
        <div key={index} className="flex flex-row justify-between mt-4 items-center relative text-center">
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.projectName}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.type}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.days}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.fee}</p>
          <div className="text-base lg:text-xl text-black font-ptSans flex-[0.4] relative">
            <FaEllipsisVertical onClick={() => toggleDropdown(index)} className="cursor-pointer" />
            {dropdownVisible[index] && (
              <div className="absolute top-[-5px] bg-white border w-[160px] border-gray-300 rounded shadow-lg transition-all duration-300 ease-in-out transform left-5">
                <p className="py-1 text-gray-800 hover:bg-gray-100 cursor-pointer border-b-2 border-b-gray-200">Applicant's list</p>
                <p className="py-1 text-gray-800 hover:bg-gray-100 cursor-pointer">Delete</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const ProjectsWithRecruitment = () => {

  const hiresData = [
    { projectName: 'Project Alpha', type: 'UI/UX Design', days: 30, name: 'John Doe', fee: '20,000' },
    { projectName: 'Project Beta', type: 'UI/UX Design', days: 45, name: 'John Doe', fee: '30,000' },
    { projectName: 'Project Gamma', type: 'Business', days: 60, name: 'John Doe', fee: '40,000' },
    { projectName: 'Project Delta', type: 'Business', days: 20, name: 'John Doe', fee: '15,000' },
  ];

  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>(Array(hiresData.length).fill(false));

  const toggleDropdown = (index: number) => {
    const newDropdownVisible = dropdownVisible.map((item, idx) => (idx === index ? !item : false));
    setDropdownVisible(newDropdownVisible);
  };

  return (
    <>
      <div className="flex flex-row justify-between mt-10 text-center">
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Project name</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Type of occupation</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Name of hired person</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Days</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Fee</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-[0.4]"></p>
      </div>
      {hiresData.map((hire, index) => (
        <div key={index} className="flex flex-row justify-between mt-4 items-center relative text-center">
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.projectName}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.type}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.name}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.days}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.fee}</p>
          <div className="text-base lg:text-xl text-black font-ptSans flex-[0.4] relative">
            <FaEllipsisVertical onClick={() => toggleDropdown(index)} className="cursor-pointer" />
            {dropdownVisible[index] && (
              <div className="absolute top-[-5px] bg-white border w-[160px] border-gray-300 rounded shadow-lg transition-all duration-300 ease-in-out transform left-5">
                <p className="py-1 text-gray-800 hover:bg-gray-100 cursor-pointer border-b-2 border-b-gray-200">Complete</p>
                <p className="py-1 text-gray-800 hover:bg-gray-100 cursor-pointer">Fired</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const ProjectsCompleted = () => {

  const hiresData = [
    { projectName: 'Project Alpha', completionDate: '15/01/2024', days: 30, name: 'John Doe', fee: '20,000' },
    { projectName: 'Project Beta', completionDate: '15/01/2024', days: 45, name: 'John Doe', fee: '30,000' },
    { projectName: 'Project Gamma', completionDate: '15/01/2024', days: 60, name: 'John Doe', fee: '40,000' },
    { projectName: 'Project Delta', completionDate: '15/01/2024', days: 20, name: 'John Doe', fee: '15,000' },
  ];

  return (
    <>
      <div className="flex flex-row justify-between mt-10 text-center">
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Project name</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Date of completion</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Name of hired person</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Days</p>
        <p className="text-xl lg:text-2xl font-semibold text-black font-ptSans flex-1">Fee</p>
      </div>
      {hiresData.map((hire, index) => (
        <div key={index} className="flex flex-row justify-between mt-4 items-center relative text-center">
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.projectName}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.completionDate}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.name}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.days}</p>
          <p className="text-base lg:text-xl text-black font-ptSans flex-1">{hire.fee}</p>
        </div>
      ))}
    </>
  );
};

const YourProjects = () => {
  const [activeButton, setActiveButton] = useState<string>("projectsWithoutRecruitment");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex flex-col" style={{ paddingTop: '6rem' }}>
      <CompanyNavbar />

      <section className="bg-white py-8 lg:py-16 px-6 lg:px-20">
        <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-left text-[#181B38]">Your Projects</h1>
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-6 mt-6">
          <button
            onClick={() => handleButtonClick("projectsWithoutRecruitment")}
            className={`border-2 border-[#BFE0FF] px-2 py-2 rounded-xl text-sm ${activeButton === "projectsWithoutRecruitment" ? "bg-[#BFE0FF]" : "bg-white"}`}
          >
            Projects without Recruitment
          </button>
          <button
            onClick={() => handleButtonClick("projectsWithRecruitment")}
            className={`border-2 border-[#BFE0FF] px-2 py-2 rounded-xl text-sm ${activeButton === "projectsWithRecruitment" ? "bg-[#BFE0FF]" : "bg-white"}`}
          >
            Projects with Recruitment
          </button>
          <button
            onClick={() => handleButtonClick("projectsCompleted")}
            className={`border-2 border-[#BFE0FF] px-2 py-2 rounded-xl text-sm ${activeButton === "projectsCompleted" ? "bg-[#BFE0FF]" : "bg-white"}`}
          >
            Projects Completed
          </button>
        </div>
        {activeButton === "projectsWithoutRecruitment" && <ProjectsWithoutRecruitment />}
        {activeButton === "projectsWithRecruitment" && <ProjectsWithRecruitment />}
        {activeButton === "projectsCompleted" && <ProjectsCompleted />}
      </section>

      <Footer />
    </div>
  );
};

export default YourProjects;
