import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CiSquareRemove } from "react-icons/ci";

const ProfessionalExperience: React.FC = () => {
  const [professionalExperience, setProfessionalExperience] =
    useState<string>("");
  const [worked, setWorked] = useState<string>("");
  const [primaryJob, setPrimaryJob] = useState<string>("");
  const [primaryJobExperience, setPrimaryJobExperience] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");
  const [linkedIn, setLinkedIn] = useState<string>("");

  const navigate = useNavigate();
  const { setFreelancerDetails } = useContext(AuthContext);

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setWorked(event.target.value.toLowerCase());
  };

  const prevStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/hiring/set-freelancer/gettingStarted");
  };

  const nextStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFreelancerDetails((prev: any) => ({
      ...prev,
      professionalExperience,
      primaryJob,
      primaryJobExperience,
      skills,
      linkedIn,
      worked,
    }));
    navigate("/hiring/set-freelancer/profileSetup");
  };

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Clear input field after adding
    }
  };

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index); // Remove the skill at the given index
    setSkills(updatedSkills);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addSkill(); // Add skill on Enter key press
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">
        Tell us about your professional experience
      </h2>
      <p className="text-lg mt-2">
        How many years of professional experience do you have in your field
        overall?
      </p>

      <input
        type="text"
        value={professionalExperience}
        onChange={(e) => setProfessionalExperience(e.target.value)}
        className="outline-none border-2 border-gray-400 p-1 mt-1 rounded-md w-[200px]"
      />

      <div className="flex gap-32 my-7">
        <span className="flex flex-col">
          <label htmlFor="jobInterest" className="font-semibold">
            Primary Job Interest
          </label>
          <input
            type="text"
            value={primaryJob}
            onChange={(e) => setPrimaryJob(e.target.value)}
            className="outline-none rounded-md w-[250px] border border-black p-1 mt-1"
          />
        </span>

        <span className="flex flex-col">
          <label htmlFor="jobInterest" className="font-semibold">
            Years of Experience in Primary Job Interest
          </label>
          <input
            type="text"
            value={primaryJobExperience}
            onChange={(e) => setPrimaryJobExperience(e.target.value)}
            className="outline-none rounded-md w-[250px] border border-black p-1 mt-1"
          />
        </span>
      </div>

      <p className="mt-5 font-semibold">
        Have you worked on online/digital projects on either UX, UI, Interaction
        Design, Branding, Visual/Marketing Design?
      </p>

      <div className="mt-2">
        <input
          type="radio"
          id="yes"
          name="work"
          value="Yes"
          checked={worked === "yes"}
          onChange={handleOptionChange}
          className="form-radio h-4 w-4 text-blue-600"
        />
        <label htmlFor="yes" className="ml-2">
          Yes
        </label>

        <br />

        <input
          type="radio"
          id="no"
          name="work"
          value="No"
          checked={worked === "no"}
          onChange={handleOptionChange}
          className="form-radio h-4 w-4 text-blue-600"
        />
        <label htmlFor="no" className="ml-2">
          No
        </label>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <span className="flex flex-col gap-2">
          <label htmlFor="skills" className="font-semibold">
            Skills (4 to 6 skills)
          </label>
          <input
            type="text"
            value={newSkill}
            onKeyDown={handleKeyDown}
            onChange={(e) => setNewSkill(e.target.value)}
            className="outline-none rounded-md w-[300px] border border-black p-1 mt-2"
          />
          <span>
            <button
              onClick={addSkill}
              className=" py-1 bg-blue-500 text-white rounded-md px-2"
            >
              Add Skill
            </button>
          </span>
        </span>
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold">Skills:</h3>
          <ul className="flex gap-2 items-center">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-500 text-white pr-2 pl-8 py-1 rounded-md flex gap-5"
              >
                {skill}
                <button
                  onClick={() => removeSkill(index)}
                  className="w-1/4 text-xl "
                >
                  <CiSquareRemove />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <span className="flex flex-col">
          <label htmlFor="linkedin" className="font-semibold">
            LinkedIn (optional)
          </label>
          <input
            type="text"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            className="outline-none rounded-md w-[300px] border border-black p-1 mt-2 mb-5"
          />
        </span>
      </div>
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
