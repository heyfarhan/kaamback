import React, { useState } from "react";
// import JobOpening from "../components/Jobopening"; // Import the JobOpening component
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Navbar from "../components/Navbar";

const ApplicationForm: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    city: "",
    gender: "",
    languages: [] as string[], // Make sure languages is typed as an array of strings
    workMode: "",
    resume: null as File | null, // Resume will be of type File or null
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect to the '/submitted' route
    navigate("/submitted");
  };

  return (
    <div className="flex flex-col bg-[#f0f0ff] text-[#041893] pb-5">
      {/* Use JobOpening component */}
      {/* <JobOpening userName="John Doe" /> */}

      <Navbar />

      <div className="flex-grow flex items-center justify-center mt-20 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-[#041893]">
            Hi there! Let's get started
          </h2>

          {/* Full legal name */}
          <div>
            <label className="block font-semibold mb-1 text-gray-600">
              Full Legal Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#041893] focus:ring-2 focus:ring-[#041893]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1 text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#041893] focus:ring-2 focus:ring-[#041893]"
            />
          </div>

          {/* Contact number */}
          <div>
            <label className="block font-semibold mb-1 text-gray-600">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#041893] focus:ring-2 focus:ring-[#041893]"
            />
          </div>

          {/* Current City */}
          <div>
            <label className="block font-semibold mb-1 text-gray-600">
              Current City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#041893] focus:ring-2 focus:ring-[#041893]"
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="block font-semibold mb-1 text-gray-600">
              Gender
            </label>
            <div className="flex space-x-6">
              {["Female", "Male", "Other"].map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <label className="block font-semibold mb-1 text-gray-600">
              Languages You Know
            </label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "English",
                "Tamil",
                "Telugu",
                "Hindi",
                "Marathi",
                "Japanese",
              ].map((lang) => (
                <label key={lang} className="flex items-center">
                  <input
                    type="checkbox"
                    name="languages"
                    value={lang}
                    onChange={(e) => {
                      const newLanguages = [...formData.languages];
                      if (e.target.checked) {
                        newLanguages.push(lang);
                      } else {
                        const index = newLanguages.indexOf(lang);
                        newLanguages.splice(index, 1);
                      }
                      setFormData({ ...formData, languages: newLanguages });
                    }}
                    className="mr-2"
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          {/* Work mode */}
          <div>
            <label className="block font-semibold mb-1 text-gray-600">
              Work Mode
            </label>
            <div className="flex space-x-6">
              {["In-office", "Work from home"].map((mode) => (
                <label key={mode} className="flex items-center">
                  <input
                    type="radio"
                    name="workMode"
                    value={mode}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>

          {/* Resume */}
          <div>
            <label className="block font-semibold mb-1 text-gray-600">
              Upload Resume
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#041893] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#010a4a] transition duration-200 ease-in-out"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
