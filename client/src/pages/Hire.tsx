// import React from 'react';
// import JobSeekerImage from '../assets/Hire_page_image.png';  // Placeholder for job seeker image
// import RecruiterImage from '../assets/Hire_page_image2.png';  // Placeholder for recruiter image

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import {useNavigate,Link} from 'react-router-dom';
// const HeroSection: React.FC = () => {

//     const navigate = useNavigate();

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         navigate("/hiring");
//       };

//   return (
//     <>
//     <Navbar/>

//     <section className="flex flex-col items-center py-16 mt-20">

//       {/* Image - Text - Image Section */}
//       <div className="grid grid-cols-2 md:grid-cols-3 items-right mb-12 px-4 md:px-5">

//         {/* Left Image */}
//         <div className="flex justify-center">
//           <img src={JobSeekerImage} alt="Job Seeker" className="w-40 h-40 " /> {/* Adjust image size */}
//         </div>

//         {/* Centered Heading and Subtext */}
//         <div className="text-center mb-4">
//           <h1 className="text-4xl font-bold mb-4 mt-20">
//             Apply to join the workforce of tomorrow
//           </h1>
//           <p className="text-gray-500 m-2">
//             Kaamback is a premier network connecting the world’s elite talent in business, design, and technology.
//             We offer access to top-tier companies, a vibrant community of professionals, and valuable resources to fast-track your career.
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center">
//           <img src={RecruiterImage} alt="Recruiter" className="w-35 h-40 " /> {/* Adjust image size */}
//         </div>
//       </div>

//       {/* Forms Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-60  w-full md:px-20 ">

//         {/* Job Seeker Form */}
//         <div className="flex flex-col items-center w-full">
//           <h2 className="text-xl font-bold mb-4 text-center">Apply as a Job Seeker</h2>
//           <form onSubmit={handleSubmit}  className="w-30 text-center">
//             <input
//               type="text"
//               placeholder="Full name"
//               className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
//               style={{ border: 'none', borderBottom: '2px solid gray' }}  // Just a bottom line
//             />
//             <select
//               className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
//               style={{ border: 'none', borderBottom: '2px solid gray' }}  // Just a bottom line
//             >
//               <option>I’m applying as..</option>
//               <option>Frontend Developer</option>
//               <option>Backend Developer</option>
//               <option>Fullstack Developer</option>
//             </select>
//             <p className="text-sm text-gray-400 mb-6">
//               By submitting, you acknowledge and agree to Kaamback’s terms and conditions and Privacy Policy.
//             </p>
//             <button className="w-1/3 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-full hover:bg-blue-500 transition-all duration-300">
//               Apply
//             </button>
//           </form>
//         </div>

//         {/* Recruiter Form */}
//         <div className="flex flex-col items-center w-full">
//           <h2 className="text-xl font-bold mb-4 text-center">Apply as a Recruiter</h2>
//           <form onSubmit={handleSubmit}  className="w-25 text-center">
//             <input
//               type="text"
//               placeholder="Full name"
//               className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
//               style={{ border: 'none', borderBottom: '2px solid gray' }}  // Just a bottom line
//             />
//             <select
//               className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
//               style={{ border: 'none', borderBottom: '2px solid gray' }}  // Just a bottom line
//             >
//               <option>I’m applying as..</option>
//               <option>HR Manager</option>
//               <option>Recruitment Consultant</option>
//               <option>Talent Acquisition</option>
//             </select>
//             <p className="text-sm text-gray-400 mb-6">
//               By submitting, you acknowledge and agree to Kaamback’s terms and conditions and Privacy Policy.
//             </p>
//             <button  className="w-1/3 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-full hover:bg-blue-500 transition-all duration-300">
//               Apply
//             </button>
//           </form>
//         </div>

//       </div>
//     </section>
//     <h1 className=" text-center  text-4xl font-bold mb-4 mt-20 ">
//             Browse Talent By Category
//           </h1>
//           <h3 className="text-center mb-4">
//           Looking for <Link to="/lookjobs" className="text-blue-500 underline">Jobs</Link>? Browse jobs
//         </h3>

//           <div className="bg-gray-100 py-12 px-4">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//     {/* Card 1 */}
//     <div className="bg-white rounded-lg shadow-md p-6 text-center h-60">
//       <h3 className="text-xl font-semibold mt-14">Development & IT</h3>
//       <p className="text-gray-600">2050 jobs</p>
//     </div>

//     {/* Card 2 */}
//     <div className="bg-white rounded-lg shadow-md p-6 text-center">
//       <h3 className="text-xl font-semibold mt-14">Design & Creative</h3>
//       <p className="text-gray-600">4070 jobs</p>
//     </div>

//     {/* Card 3 */}
//     <div className="bg-white rounded-lg shadow-md p-6 text-center">
//       <h3 className="text-xl font-semibold mt-14">Accounting & Finance</h3>
//       <p className="text-gray-600">2144 jobs</p>
//     </div>

//     {/* Card 4 */}
//     <div className="bg-white rounded-lg shadow-md p-6 text-center">
//       <h3 className="text-xl font-semibold mt-14">Development & IT</h3>
//       <p className="text-gray-600">2050 jobs</p>
//     </div>
//   </div>
// </div>

//     <Footer/>
//     </>
//   );
// };

// export default HeroSection;

import React from "react";
import JobSeekerImage from "../assets/Hire_page_image.png"; // Placeholder for job seeker image
import RecruiterImage from "../assets/Hire_page_image2.png"; // Placeholder for recruiter image

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
// import img1 from '../assets/img1.png';
// import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmitFreelancer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/hiring/set-freelancer/gettingStarted");
  };
  const handleSubmitCompany = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/hiring/set-company/gettingStarted");
  };

  return (
    <>
      <Navbar />

      <section className="flex flex-col items-center py-16 mt-20">
        {/* Image - Text - Image Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-right mb-12 px-4 md:px-5">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={JobSeekerImage} alt="Job Seeker" className="w-40 h-40 " />{" "}
            {/* Adjust image size */}
          </div>

          {/* Centered Heading and Subtext */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold mb-4 mt-20">
              Apply to join the workforce of tomorrow
            </h1>
            <p className="text-gray-500 m-2">
              Kaamback is a premier network connecting the world’s elite talent
              in business, design, and technology. We offer access to top-tier
              companies, a vibrant community of professionals, and valuable
              resources to fast-track your career.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={RecruiterImage} alt="Recruiter" className="w-35 h-40 " />{" "}
            {/* Adjust image size */}
          </div>
        </div>

        {/* Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-60  w-full md:px-20 ">
          {/* Job Seeker Form */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-xl font-bold mb-4 text-center">
              Apply as a Job Seeker
            </h2>
            <form
              onSubmit={handleSubmitFreelancer}
              className="w-30 text-center"
            >
              <input
                type="text"
                placeholder="Full name"
                className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
                style={{ border: "none", borderBottom: "2px solid gray" }} // Just a bottom line
              />
              {/* <select 
              className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
              style={{ border: 'none', borderBottom: '2px solid gray' }}  // Just a bottom line
            >
              <option>I’m applying as..</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Fullstack Developer</option>
            </select> */}
              <p className="text-sm text-gray-400 mb-6">
                By submitting, you acknowledge and agree to Kaamback’s terms and
                conditions and Privacy Policy.
              </p>
              <button className="w-1/3 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-full hover:bg-blue-500 transition-all duration-300">
                Apply
              </button>
            </form>
          </div>

          {/* Recruiter Form */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-xl font-bold mb-4 text-center">
              Apply as a Recruiter
            </h2>
            <form onSubmit={handleSubmitCompany} className="w-25 text-center">
              <input
                type="text"
                placeholder="Full name"
                className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
                style={{ border: "none", borderBottom: "2px solid gray" }} // Just a bottom line
              />
              {/* <select 
              className="w-full mb-4 text-center border-b border-gray-400 focus:outline-none focus:border-blue-500"
              style={{ border: 'none', borderBottom: '2px solid gray' }}  // Just a bottom line
            >
              <option>I’m applying as..</option>
              <option>HR Manager</option>
              <option>Recruitment Consultant</option>
              <option>Talent Acquisition</option>
            </select> */}
              <p className="text-sm text-gray-400 mb-6">
                By submitting, you acknowledge and agree to Kaamback’s terms and
                conditions and Privacy Policy.
              </p>
              <button className="w-1/3 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-full hover:bg-blue-500 transition-all duration-300">
                Apply
              </button>
            </form>
          </div>
        </div>
      </section>
      <h1 className=" text-center  text-4xl font-bold mb-4 mt-20 ">
        Browse Talent By Category
      </h1>
      <h3 className="text-center mb-4">
        Looking for{" "}
        <Link to="/lookjobs" className="text-blue-500 underline">
          Jobs
        </Link>
        ? Browse jobs
      </h3>

      <div className="bg-gray-100 py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center h-60">
            <h3 className="text-xl font-semibold mt-14">Development & IT</h3>
            <p className="text-gray-600">2050 jobs</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mt-14">Design & Creative</h3>
            <p className="text-gray-600">4070 jobs</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mt-14">
              Accounting & Finance
            </h3>
            <p className="text-gray-600">2144 jobs</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mt-14">Development & IT</h3>
            <p className="text-gray-600">2050 jobs</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HeroSection;
