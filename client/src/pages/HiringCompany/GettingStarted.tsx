import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const GettingStarted: React.FC = () => {
  const navigate = useNavigate();
  const { setCompanyDetails } = useContext(AuthContext);
  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await setCompanyDetails((prev: any) => ({ ...prev, ...formData }));
    navigate("/hiring/set-company/professionalExperience");
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
            Company Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>

        <span className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="email" className="font-semibold">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
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
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="outline-none border-2 border-black p-1 rounded-md"
          />
        </span>
      </div>
      <div className="mt-7">
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
