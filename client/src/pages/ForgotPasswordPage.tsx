import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import  Navbar  from "../components/Navbar";

// Define the response structure from the forgot password API
interface ForgotPasswordResponse {
  status: string;
  message?: string;
}

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const { handleForgotPasswordSuccess } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForgotPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    try {
      setError(null);

      const response = await fetch("/api/user/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: ForgotPasswordResponse = await response.json();
      console.log(result);

      if (result.status === "true") {
        setMessage("OTP sent. Redirecting to verification...");
        handleForgotPasswordSuccess(email);
        navigate("/forgot-verify-otp");
      } else {
        setError(result.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error during password reset:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
   <div className="h-screen bg-gradient-to-r from-blue-500 to-cyan-500">
    <Navbar/>
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white w-[280px] py-3 px-4 flex flex-col items-center rounded-xl">
        <h1 className="text-black text-xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleForgotPassword} className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold text-md">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            className="outline-none border-b-[2px]  mb-3 mt-1 text-md rounded-md border-gray-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] w-full my-4 text-white font-semibold rounded-full"
          >
            Send OTP
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {message && <p className="text-green-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgotPasswordPage;
