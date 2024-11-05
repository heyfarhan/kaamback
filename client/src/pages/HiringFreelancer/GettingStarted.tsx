import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const GettingStarted: React.FC = () => {
  const navigate = useNavigate();
  const { setFreelancerDetails } = useContext(AuthContext);
  const [englishProficiency, setEnglishProficiency] = useState<string>("");
  const [formData, setFormData] = React.useState({
    fullName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Add form validation here if needed
    setFreelancerDetails((prev: any) => ({ ...prev, ...formData }));
    setFreelancerDetails((prev: any) => ({ ...prev, englishProficiency }));
    navigate("/hiring/set-freelancer/professionalExperience");
  };

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEnglishProficiency(event.target.value.toLowerCase());
  };

  return (
    <div>
      <h2 className="text-xl font-bold">
        Welcome to KaamBack. Let's get started!
      </h2>
      <p className="text-gray-600">
        Your application should only take a few minutes. Based on the
        information you provide, our screening team will determine the best path
        for you going forward.
      </p>
      <div className="flex flex-col gap-5 mt-5">
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="fullName" className="font-semibold">
            Fullname
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="birthDate" className="font-semibold">
            Birth Date
          </label>
          <input
            type="date"
            id="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
        <div className="flex gap-7">
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="phoneNumber" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
        </div>
        <div className="flex gap-7">
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="country" className="font-semibold">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="city" className="font-semibold">
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="outline-none border-2 border-black p-1 rounded-md"
            />
          </span>
        </div>
      </div>
      {/* <RadioButtons /> */}
      <div className="my-5">
        <p className="text-lg font-semibold mb-2">English Proficiency</p>

        <div className="flex gap-5">
          <span className="flex items-center">
            <input
              type="radio"
              id="native"
              name="proficiency"
              value="Native/Fluent"
              checked={englishProficiency === "native/fluent"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <label htmlFor="native" className="ml-2">
              Native/Fluent
            </label>
          </span>
          <span className="flex items-center">
            <input
              type="radio"
              id="advanced"
              name="proficiency"
              value="Advanced"
              checked={englishProficiency === "advanced"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <label htmlFor="advanced" className="ml-2">
              Advanced
            </label>
          </span>

          <span className="flex items-center">
            <input
              type="radio"
              id="intermediate"
              name="proficiency"
              value="Intermediate"
              checked={englishProficiency === "intermediate"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <label htmlFor="intermediate" className="ml-2">
              Intermediate
            </label>
          </span>

          <span className="flex items-center">
            <input
              type="radio"
              id="basic"
              name="proficiency"
              value="Basic"
              checked={englishProficiency === "basic"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <label htmlFor="basic" className="ml-2">
              Basic
            </label>
          </span>
        </div>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;
