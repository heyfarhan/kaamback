import React, { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isVerifiedForOtp, setIsVerifiedForOtp] = useState(false);
  const [email, setEmail] = useState(null);
  const [redirectPath, setRedirectPath] = useState("/");
  const [user, setUser] = useState(null);
  const [jobDetail, setJobDetail] = useState(null);
  const [freelancerDetails, setFreelancerDetails] = useState({
    fullName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    englishProficiency: "",
    professionalExperience: 0,
    primaryJob: "",
    primaryJobExperience: 0,
    worked: "",
    skills: [],
    linkedIn: "",
    profilePhoto: File | null,
    resume: File | null,
  });
  const [companyDetails, setCompanyDetails] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    website: "",
    registrationNumber: "",
    industry: "",
    description: "",
    logo: File | null,
  });

  const [freelancerData, setFreelancerData] = useState(null);

  // Function to handle signup success
  const handleSignupSuccess = (userEmail) => {
    setEmail(userEmail);
    setIsVerifiedForOtp(true);
    setRedirectPath("/");
  };

  // Function to handle forgot password success
  const handleForgotPasswordSuccess = (userEmail) => {
    setEmail(userEmail);
    setIsVerifiedForOtp(true);
    setRedirectPath("/");
  };

  // Function to reset verification and redirect path after successful OTP
  const handleOtpSuccess = (userData) => {
    setIsVerifiedForOtp(false);
    setUser(userData);
    setEmail(null);
  };

  const handleOtpSuccessForForgotPassword = (userData) => {
    setIsVerifiedForOtp(false);
    setEmail(userData.user.email);
  };

  // Function to handle login
  const loginuser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to handle logout
  const logout = () => {
    setUser(null); // Clear user data
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const setFreelancerDataState = (data) => {
    localStorage.setItem("freelancerData", JSON.stringify(data));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("freelancerData");
    if (storedData) {
      setFreelancerData(JSON.parse(storedData));
    }
  }, []);


  

  return (
    <AuthContext.Provider
      value={{
        isVerifiedForOtp,
        email,
        redirectPath,
        user,
        handleSignupSuccess,
        handleForgotPasswordSuccess,
        handleOtpSuccess,
        handleOtpSuccessForForgotPassword,
        loginuser,
        logout,
        freelancerDetails,
        setFreelancerDetails,
        companyDetails,
        setCompanyDetails,
        jobDetail,
        setJobDetail,
        freelancerData,
        setFreelancerDataState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
