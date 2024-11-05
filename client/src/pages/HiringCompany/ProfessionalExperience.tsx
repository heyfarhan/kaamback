import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfessionalExperience: React.FC = () => {
  const [website, setWebsite] = useState<string>("");
  const [registrationNumber, setRegistrationNumber] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();
  const { setCompanyDetails } = useContext(AuthContext);

  const prevStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/hiring/set-company/gettingStarted");
  };

  const nextStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCompanyDetails((prev: any) => ({
      ...prev,
      website,
      registrationNumber,
      industry,
      description,
    }));
    navigate("/hiring/set-company/profileSetup");
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Tell us about your company</h2>

      <div className="flex flex-col gap-5 my-5">
        <span className="flex flex-col">
          <label htmlFor="jobInterest" className="font-semibold">
            Company Website
          </label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="outline-none rounded-md w-[250px] border border-black p-1 mt-2"
          />
        </span>
        <span className="flex flex-col">
          <label htmlFor="jobInterest" className="font-semibold">
            Registration Number
          </label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="outline-none rounded-md w-[250px] border border-black p-1 mt-2"
          />
        </span>

        <span className="flex flex-col">
          <label htmlFor="jobInterest" className="font-semibold">
            Industry
          </label>
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="outline-none rounded-md w-[250px] border border-black p-1 mt-2"
          />
        </span>
      </div>

      <span className="flex flex-col">
        <label htmlFor="linkedin" className="font-semibold">
          Description
        </label>
        <textarea
          value={description}
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none outline-none rounded-md border border-black p-1 mt-2 mb-5"
        />
      </span>

      <div className="flex gap-5">
        <button
          onClick={prevStep}
          className="text-white px-5 pb-1 bg-gray-700 font-semibold text-3xl rounded-full"
        >
          &larr;
        </button>
        <button
          onClick={nextStep}
          className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
