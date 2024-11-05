import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

// Define the expected response type from the server
interface SetPasswordResponse {
  status: string;
  message?: string;
}

const SetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { email } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log("email", email);

  // Handle form submission and password setting
  const handleSetPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const item = { email, newPassword: password };
      setError(null);

      const response = await fetch("/api/user/setpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
        credentials: "include",
      });

      const result: SetPasswordResponse = await response.json();
      console.log(result);

      if (result.status === "true") {
        setSuccess("Password has been reset successfully");
        navigate("/login");
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2000);
      } else {
        setError(result.message || "Failed to reset password");
      }
    } catch (err) {
      console.error("Error during password reset:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-cyan-500">
      <Navbar />
      <div className="h-full w-full flex justify-center items-center">
        <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
          <h1 className="text-black text-xl font-bold mb-4">
            Set New Password
          </h1>
          <form onSubmit={handleSetPassword} className="flex flex-col w-full">
            <label htmlFor="password" className="font-semibold text-md">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your new password"
              className="outline-none border-b-[2px] rounded-md mb-3 mt-1 text-md border-gray-300"
            />
            <label htmlFor="confirmPassword" className="font-semibold text-md">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
              className="outline-none border-b-[2px] rounded-md mb-3 mt-1 text-md border-gray-300"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] w-full my-4 text-white font-semibold rounded-full"
            >
              Set Password
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
