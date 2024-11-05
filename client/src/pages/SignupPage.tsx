import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

// Define the response structure from the signup API
interface SignupResponse {
  success: boolean;
  message?: string;
}

const SignupPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { handleSignupSuccess } = useContext(AuthContext);
  const navigate = useNavigate();

  const signUp = async (event: React.FormEvent) => {
    event.preventDefault();

    // Form validation
    if (!name || !password || !confirmPassword || !email || !dob) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      const item = { name, password, email, dateOfBirth: dob };
      // console.log(item);
      setError(null);

      const signUpUrl = "/api/auth/signup";
      const response = await fetch(signUpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Log the response for debugging
      console.log("Response:", response);

      const result: SignupResponse = await response.json();

      console.log("result", result);

      if (result.success === true) {
        handleSignupSuccess(email);
        navigate("/otp-verification");
      } else {
        setError(result.message || "Email should be unique");
      }
    } catch (err) {
      console.error("Error while fetching SignUp API", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-cyan-500">
        <Navbar />
      <div className=" w-full h-full flex justify-center items-center pt-10">
        <div className="bg-white w-[320px] py-3 px-4 flex flex-col items-center rounded-xl">
          <h1 className="text-black text-xl font-bold mb-4">Sign Up</h1>
          <section className="flex flex-col w-full">
            <label htmlFor="name" className="font-semibold text-md">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name"
              className="outline-none border-b-[2px] mt-1 rounded-md  mb-3 text-md border-gray-300"
            />
          </section>
          <section className="flex flex-col w-full">
            <label htmlFor="password" className="font-semibold text-md">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your password"
              className="outline-none border-b-[2px] mt-1 rounded-md mb-3 text-md border-gray-300"
            />
          </section>
          <section className="flex flex-col w-full">
            <label htmlFor="confirmPassword" className="font-semibold text-md">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="outline-none border-b-[2px] mt-1 rounded-md mb-3 text-md border-gray-300"
            />
          </section>
          <section className="flex flex-col w-full">
            <label htmlFor="email" className="font-semibold text-md">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email"
              className="outline-none border-b-[2px] mt-1 rounded-md mb-3 text-md border-gray-300"
            />
          </section>
          <section className="flex flex-col w-full">
            <label htmlFor="dob" className="font-semibold text-md">
              Date Of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="YYYY-MM-DD"
              className="outline-none border-b-[2px] mt-1 rounded-md mb-3 text-md border-gray-300"
            />
          </section>
          <button
            onClick={signUp}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 py-[5px] w-full mb-2 mt-4 text-white font-semibold rounded-full"
          >
            Register
          </button>
          <Link
            to="/login"
            className="text-center text-blue-500 mb-3 hover:underline"
          >
            Already have account?
          </Link>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
