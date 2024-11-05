import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// Define Job interface for individual job openings
interface Job {
  _id: string;
  roleName: string;
  roleType: string;
  createdAt: string;
  updatedAt: string;
}

// Define Response interface for the API response
interface JobOpeningsResponse {
  success: boolean;
  openings: Job[];
  message?: string;
}

const Openings = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const response = await fetch("api/career/openings");
        if (!response.ok) {
          throw new Error("Failed to fetch job openings");
        }
        const data: JobOpeningsResponse = await response.json();
        console.log(data);
        if (data.success) {
          setJobs(data.openings);
          setError(null);
        } else {
          setError(data.message || "Failed to fetch job openings.");
          console.error("Failed to fetch job openings: ", data.message);
        }
      } catch (error) {
        setError("Error fetching job openings.");
        console.error("Error fetching job openings:", error);
      }
    };

    fetchJobOpenings();
  }, []);

  const handleApplyNow = (jobId: string) => {
    navigate(`/application/${jobId}`);
  };

  function toTitleCase(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="min-h-screen bg-[#EAEBFF] flex flex-col pb-10">
      <Navbar />

      <div className="container px-5 mx-auto lg:px-24 mt-24 lg:mt-16 flex-grow">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Explore Open Positions
        </h2>

        {/* Display Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-9">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white text-black rounded-2xl p-5 shadow-lg flex flex-col justify-center"
              >
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    {toTitleCase(job.roleName)}
                  </h2>
                  <p className="text-gray-700">{toTitleCase(job.roleType)}</p>
                  {/* Optional: Display createdAt if needed */}
                  <p className="text-gray-500 text-sm">
                    Created At: {new Date(job.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Updated At: {new Date(job.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleApplyNow(job._id)}
                  className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">
              No job openings available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Openings;
