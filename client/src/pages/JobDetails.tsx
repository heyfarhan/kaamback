import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const { jobDetail } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("here are job details from jobdetails page", jobDetail);
  console.log("here are job id from jobdetails page", jobId);

  if (!jobDetail) {
    return (
      <div className="text-center py-5">Please go back and try again...</div>
    );
  }

  const job = jobDetail.find((job: any) => job._id === jobId);

  const handleApplyClick = (jobId: string) => {
    navigate(`/application/${jobId}`); // Navigate to /application route
  };

  return (
    <>
      <Navbar />
      <div className="h-screen max-w-3xl mx-auto mt-10 p-5 pt-0 bg-white shadow-md rounded-lg">
        {job ? (
          <div>
            <h2 className="text-2xl font-bold mb-2">{job.jobTitle}</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Job Details</h3>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Experience Required:</strong> {job.experienceYears}{" "}
                  years
                </p>
                <p>
                  <strong>Expected Salary:</strong> ₹{job.expectedSalary}
                </p>
                <p>
                  <strong>Job Type:</strong> {job.jobType}
                </p>
                <p>
                  <strong>Duration:</strong> {job.duration}
                </p>
                <p>
                  <strong>Skills Required:</strong> {job.skills.join(", ")}
                </p>
                <p>
                  <strong>Department:</strong> {job.department}
                </p>
                <p>
                  <strong>Recruitment Period:</strong> {job.recruitmentPeriod}
                </p>
              </div>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Company Details</h3>
              <p>
                <strong>Name:</strong> {job.companyDetails.name}
              </p>
              <p>
                <strong>Address:</strong> {job.companyDetails.address}
              </p>
              <p>
                <strong>Email:</strong> {job.companyDetails.email}
              </p>
              <p>
                <strong>Phone:</strong> {job.companyDetails.phone}
              </p>
              <p>
                <strong>Website:</strong>
                <a
                  href={job.companyDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {job.companyDetails.website}
                </a>
              </p>
              <p>
                <strong>Industry:</strong> {job.companyDetails.industry}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                <p className=" w-full h-16 px-2 py-1 border border-gray-300 rounded-lg">
                  {job.companyDetails.description}
                </p>
              </p>
              <button
                onClick={() => handleApplyClick(job._id)}
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-16 rounded-lg mt-5"
              >
                Apply
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">Unable to get job details</div>
        )}
      </div>
    </>
  );
};

export default JobDetails;
