import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// Popup confirmation component
const ConfirmationPopup: React.FC<{
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold mb-4">
          Are you sure you want to submit the application?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Yes, Submit
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const { setFreelancerDetails, freelancerDetails, setFreelancerDataState } =
    useContext(AuthContext);

  // Form state
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false); // State to control popup

  // Handle profile photo change
  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setErrorMessage(
          "Only JPG or PNG formats are allowed for profile photo."
        );
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        setErrorMessage("Profile photo must be smaller than 2MB.");
        return;
      }
      setErrorMessage("");
      setProfilePhoto(file);
    }
  };

  // Handle resume change
  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setErrorMessage("Only PDF format is allowed for the resume.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setErrorMessage("Resume must be smaller than 5MB.");
        return;
      }
      setErrorMessage("");
      setResume(file);
    }
  };

  // Handle form submission with confirmation
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validation check
    // if (!profilePhoto || !resume) {
    //   setErrorMessage("Please upload both profile photo and resume.");
    //   return;
    // }

    // Set freelancer details context
    setFreelancerDetails((prev: any) => ({
      ...prev,
      profilePhoto,
      resume,
    }));

    // Show the confirmation popup
    setShowPopup(true);
  };

  const confirmSubmission = async () => {
    setShowPopup(false); // Close the popup

    // console.log("Selected Profile Photo:", freelancerDetails.profilePhoto);
    // console.log("Selected Resume:", freelancerDetails.resume);
    // console.log("here is freelancer details", freelancerDetails);

    const formData = new FormData();
    formData.append("fullName", freelancerDetails.fullName);
    formData.append("country", freelancerDetails.country);
    formData.append("city", freelancerDetails.city);
    formData.append("englishProficiency", freelancerDetails.englishProficiency);
    formData.append(
      "professionalExperience",
      freelancerDetails.professionalExperience
    );
    formData.append("primaryJob", freelancerDetails.primaryJob);
    formData.append(
      "primaryJobExperience",
      freelancerDetails.primaryJobExperience
    );
    formData.append("worked", freelancerDetails.worked);
    formData.append("skills", JSON.stringify(freelancerDetails.skills));
    formData.append("profile", freelancerDetails.profilePhoto);
    formData.append("resume", freelancerDetails.resume);

    try {
      const requestOptions: RequestInit = {
        method: "POST",
        body: formData,
        credentials: "include",
      };

      const response = await fetch(
        "/api/freelancer/set-freelancer",
        requestOptions
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        // console.log(result.message);
        // console.log(result.data);
        await setFreelancerDataState(result.data);
        navigate("/hiring/set-freelancer/applicationSubmitted");
      } else {
        setErrorMessage("Failed to submit freelancer details.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error occurred while submitting freelancer details.");
    }
  };

  // Navigate to the previous page
  const prevStep = () => {
    navigate("/hiring/set-freelancer/professionalExperience");
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Set up your professional profile</h1>
      <h2 className="font-semibold">Profile Photo</h2>
      <p>
        Please upload a high-quality profile photo. Freelancers with
        professional profile photos are prioritized and see more jobs with
        Kaamback clients.
      </p>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div className="flex mt-7 gap-10">
        <div className="h-[250px] w-[250px] bg-gray-300 flex flex-col justify-center items-center rounded-3xl">
          <div className="h-[80px] w-[80px] border-4 border-black rounded-full"></div>
          <div className="h-[100px] w-[200px] border-4 border-b-0 border-black rounded-t-full"></div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="flex flex-col gap-1 w-[250px]">
            <label htmlFor="profilePhoto" className="font-semibold">
              Profile Photo (JPG or PNG, Max 2MB)
            </label>
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="outline-none border-2 border-black  rounded-md"
            />
          </span>
        </div>
      </div>

      <p className="font-semibold mt-5">Resume</p>
      <p>Please upload your resume</p>

      <div className="mt-2 mb-5 flex">
        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="resume" className="font-semibold">
            Resume (PDF, Max 5MB)
          </label>
          <input
            type="file"
            id="resume"
            accept="application/pdf"
            onChange={handleResumeChange}
            className="outline-none border-2 border-black rounded-md"
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
          onClick={handleSubmit}
          className="px-16 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xl rounded-full"
        >
          Submit
        </button>
      </div>

      {/* Show the confirmation popup if showPopup is true */}
      {showPopup && (
        <ConfirmationPopup
          onConfirm={confirmSubmission}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default ProfileSetup;
