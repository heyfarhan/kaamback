// import JobOpening from '../components/JobOpening';
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const JobPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [jobs, setJobs] = useState<any[]>([]); // State to store job listings
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const { setJobDetail } = useContext(AuthContext);

  // Fetch job listings from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("api/freelancer/feed?page=1&limit=10");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        // console.log(data);
        // console.log(data.data);
        // console.log(data.data[0].companyDetails);
        setJobDetail(data.data);
        setJobs(data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.data.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchJobs();
  }, [setJobDetail]);

  // Function to handle navigation
  const handleApplyClick = (jobId: string) => {
    navigate(`/application/${jobId}`); // Navigate to /application route
  };
  const handleGetDetails = (jobId: string) => {
    navigate(`/job/details/${jobId}`);
  };

  if (loading) {
    return <p>Loading...</p>; // Loading indicator
  }

  if (error) {
    return <p>Error: {error}</p>; // Error handling
  }

  return (
    <div>
      <Navbar />
      {/* <JobOpening userName={undefined} /> */}
      {/* <JobOpening  /> */}

      {/* Main Section */}
      <div className="container mt-5 mx-auto px-4 md:px-8 lg:px-16">
        <div className="py-10">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
            47 Work From Home UI/UX Internships
          </h1>
          <p className="text-gray-500 text-center mb-10">
            Latest UI/UX Intern Jobs
          </p>

          {/* Main Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Section */}
            <div className="bg-gray-100  md:p-10 rounded-lg w-full  lg:w-1/3 mx-10 ">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Filters</h2>

              <div className="mb-6">
                <label className="block text-gray-700">Profile</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter profile"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter location"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Work Type</label>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Work from home</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Part-time</span>
                  </label>
                </div>
              </div>

              {/* Stipend Slider */}
              <div className="mb-6">
                <label className="block text-gray-700">
                  Desired minimum monthly stipend
                </label>
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="10000"
                  step="1000"
                />
                {/* Labels below the slider */}
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0</span>
                  <span>1K</span>
                  <span>2K</span>
                  <span>4K</span>
                  <span>6K</span>
                  <span>8K</span>
                  <span>10K</span>
                </div>
              </div>
            </div>

            {/* Job Listings Section */}
            <div className="w-full md:w-1/2 space-y-10 ">
              {/* 1st Job Card */}
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-gray-100 p-5 rounded-lg flex flex-col md:flex-row justify-between items-center"
                >
                  <div className="  mb-4 md:mb-0">
                    <h3 className="text-lg font-bold">{job.jobTitle}</h3>
                    <p className="text-gray-600 font-semibold">
                      {job.companyDetails.name} - {job.companyDetails.industry}
                    </p>
                    <p className="text-gray-600">{job.jobType}</p>
                    <span className="text-gray-600">Skills Required : </span>
                    {job.skills.map((skill: any, index: any) => (
                      <span key={index} className="text-gray-600 mr-[5px]">
                        &#x2022; {skill}
                      </span>
                    ))}
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.134 2 5 5.134 5 9c0 4.418 5.373 10.163 6.586 11.414a1.992 1.992 0 002.828 0C13.627 19.163 19 13.418 19 9c0-3.866-3.134-7-7-7zm0 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22c1.103 0 2-.897 2-2h-4c0 1.103.897 2 2 2zM17 14V8c0-3.309-2.691-6-6-6S5 4.691 5 8v6l-2 2v1h18v-1l-2-2z" />
                        </svg>
                        {job.duration}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        Rs. {job.expectedSalary}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <button
                      className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg"
                      onClick={() => handleGetDetails(job._id)}
                    >
                      View Details
                    </button>
                    <button
                      className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg"
                      onClick={() => handleApplyClick(job._id)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
