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
  const { setCompanyDetails } = useContext(AuthContext);
  const { companyDetails } = useContext(AuthContext);

  // Form state
  const [logo, setLogo] = useState<File | null>(null);
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
      setLogo(file);
    }
  };

  // Handle form submission with confirmation
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Set freelancer details context
    setCompanyDetails((prev: any) => ({
      ...prev,
      logo,
    }));

    // Show the confirmation popup
    setShowPopup(true);
  };

  const confirmSubmission = async () => {
    setShowPopup(false); // Close the popup

    // console.log("Selected Profile Photo:", freelancerDetails.profilePhoto);
    // console.log("Selected Resume:", freelancerDetails.resume);
    console.log("here is company details", companyDetails);

    const formData = new FormData();
    formData.append("name", companyDetails.name);
    formData.append("address", companyDetails.address);
    formData.append("email", companyDetails.email);
    formData.append("phone", companyDetails.phone);
    formData.append("website", companyDetails.professionalExperience);
    formData.append("registrationNumber", companyDetails.registrationNumber);
    formData.append("industry", companyDetails.industry);
    formData.append("description", companyDetails.description);
    formData.append("logo", companyDetails.logo);

    try {
      const requestOptions: RequestInit = {
        method: "POST",
        body: formData,
        credentials: "include",
      };

      const response = await fetch("/api/company/set-company", requestOptions);

      const result = await response.json();
      console.log(result);

      if (result.success) {
        console.log(result.message);
        navigate("/hiring/set-company/applicationSubmitted");
      } else {
        setErrorMessage(result.message || "Failed to submit comapny details.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error occurred while submitting company details.");
    }
  };

  // Navigate to the previous page
  const prevStep = () => {
    navigate("/hiring/set-company/professionalExperience");
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Set up your company profile</h1>
      <h2 className="font-semibold">Company Profile Photo</h2>
      <p>Please upload a high-quality profile photo.</p>

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
              id="logo"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="outline-none border-2 border-black  rounded-md"
            />
          </span>
        </div>
      </div>

      <div className="flex gap-5 mt-16">
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
