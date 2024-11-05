import { useState } from "react";
import CompanyNavbar from "../components/CompanyNavbar"
import Footer from "../components/Footer"
import avatar from '../assets/avatar.png'
import { IoLocation } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import ReviewList from "../components/ReviewList";
import { HiStar } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";

const Profile = () => {

  const [showInput, setShowInput] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [stars, setStars] = useState(0);

  const handleInputChange = (e: any) => {
    const text = e.target.value;
    setReviewText(text);
    setWordCount(text.length);
  };

  const handleStarClick = (star: any) => {
    setStars(star);
  };

  const handleSubmit = () => {
    alert(`Review submitted with ${stars} stars: ${reviewText}`);
    setReviewText('');
    setStars(0);
    setShowInput(false);
    setWordCount(0);
  };

  const skills = [
    'Figma', 'Interaction Design', 'Visual Design', 'Logo Design',
    'Brand Identity Design', 'Adobe Illustrator', 'Drawing', 'Sketching', 'Canva'
  ];

  const profiles = [
    { name: "Name", role: "React Developer" },
    { name: "Name", role: "React Developer" },
    { name: "Name", role: "React Developer" },
    { name: "Name", role: "React Developer" },
    { name: "Name", role: "React Developer" },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const truncateText = (text: String, wordLimit: any) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const truncatedText = truncateText(text, 60);

  return (
    <>
      <CompanyNavbar />
      <div className="flex flex-col px-4 md:px-24 my-10 md:my-20" style={{ paddingTop: '6rem' }}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] flex flex-col">
            <div className="flex flex-col md:flex-row gap-x-10 items-center">
              <img src={avatar} alt="profile" className="w-[150px] h-[150px] rounded-full" />
              <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl md:text-3xl font-semibold">Aryaman Singh</h1>
                <div className="flex flex-row items-center">
                  <FaStar size={15} color="black" />
                  <p className="text-sm font-semibold ml-1">4.5 <span className="text-gray-600">(1.4k)</span></p>
                </div>
                <h2 className="text-md font-semibold">UI/UX Designer</h2>
                <div className="flex flex-row items-center">
                  <IoLocation size={16} color="black" />
                  <p className="text-md font-semibold ml-1">Navi Mumbai, Maharashtra</p>
                </div>
                <div className="flex flex-row items-center">
                  <BsEnvelopeFill size={16} color="black" />
                  <p className="text-md font-semibold ml-1 mr-3">abcd@gmail.com</p>
                  <FaPhone size={16} color="black" />
                  <p className="text-md font-semibold ml-1">+91-1234567890</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-8 md:mt-16">
              <h1 className="text-2xl font-semibold">About Me</h1>
              <p className="text-md font-medium mt-5">
                {isExpanded ? text : truncatedText}
                <span onClick={toggleExpand} className="text-gray-500 cursor-pointer">
                  {isExpanded ? ' Show less' : ' Read more'}
                </span>
              </p>
            </div>

            <div className="flex flex-col mt-8 md:mt-16">
              <h1 className="text-2xl font-semibold">Skills</h1>
              <div className="mt-5 flex flex-row flex-wrap gap-x-5 gap-y-3">
                {skills.map(skill => (
                  <button key={skill} className="border-2 border-[#1F82E8] px-2 py-1 rounded-xl text-md font-medium">
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%] flex flex-col items-center justify-end mt-10 md:mt-0">
            <div className="flex flex-row gap-x-5 mb-10 md:mb-16">
              <button className="flex flex-row items-center lg:px-16 px-8 py-2 border-2 border-[#BFE0FF] rounded-xl gap-x-2">
                <PiTelegramLogo size={20} color="black" />
                <p className="text-md font-semibold">Message</p>
              </button>
              <button className="bg-[#BFE0FF] lg:px-20 px-16 py-2 rounded-xl">
                <p className="text-md font-semibold">Hire</p>
              </button>
            </div>

            <div className="bg-[#BFE0FF] flex flex-col px-6 py-5 rounded-3xl w-full md:w-[80%]">
              <h1 className="text-2xl font-semibold">Other Similar Profiles</h1>
              {profiles.map((profile, index) => (
                <div key={index} className="flex flex-row mt-5 items-center">
                  <img src={avatar} alt="profile" className="h-[50px] w-[50px] rounded-full mr-5" />
                  <p className="text-lg font-semibold">
                    {profile.name}
                    <span className="text-sm font-medium block">{profile.role}</span>
                  </p>
                  <button className="bg-[#1F82E8] px-4 py-1 text-white cursor-pointer text-sm font-medium rounded-lg ml-auto">
                    See Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-10">
          <div className="w-full md:w-[20%] flex flex-col">
            <h1 className="text-2xl font-semibold">Review</h1>
            <div className="flex items-center mt-3 mb-2">
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>

            <h2 className="text-lg font-semibold mt-1">4 out of 5</h2>
            <p className="mt-2 font-medium text-gray-400">1.4k Global Ratings</p>
            <div className="flex items-center mt-4">
              <a href="#" className="text-sm font-medium text-black dark:text-blue-500 hover:underline">5 star</a>
              <div className="w-2/4 h-3 mx-4 bg-[#BFE0FF] rounded dark:bg-gray-700">
                <div className="h-3 bg-[#041893] rounded w-[70%]"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">(700)</span>
            </div>
            <div className="flex items-center mt-2">
              <a href="#" className="text-sm font-medium text-black dark:text-blue-500 hover:underline">4 star</a>
              <div className="w-2/4 h-3 mx-4 bg-[#BFE0FF] rounded dark:bg-gray-700">
                <div className="h-3 bg-[#041893] rounded w-[17%]"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">(170)</span>
            </div>
            <div className="flex items-center mt-2">
              <a href="#" className="text-sm font-medium text-black dark:text-blue-500 hover:underline">3 star</a>
              <div className="w-2/4 h-3 mx-4 bg-[#BFE0FF] rounded dark:bg-gray-700">
                <div className="h-3 bg-[#041893] rounded w-[8%]"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">(80)</span>
            </div>
            <div className="flex items-center mt-2">
              <a href="#" className="text-sm font-medium text-black dark:text-blue-500 hover:underline">2 star</a>
              <div className="w-2/4 h-3 mx-4 bg-[#BFE0FF] rounded dark:bg-gray-700">
                <div className="h-3 bg-[#041893] rounded w-[4%]"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">(40)</span>
            </div>
            <div className="flex items-center mt-2">
              <a href="#" className="text-sm font-medium text-black dark:text-blue-500 hover:underline">1 star</a>
              <div className="w-2/4 h-3 mx-4 bg-[#BFE0FF] rounded dark:bg-gray-700">
                <div className="h-3 bg-[#041893] rounded w-[1%]"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">(10)</span>
            </div>

            <div className="flex flex-row justify-between items-center mt-6">
              <button onClick={() => setShowInput(!showInput)} className="bg-[#1F82E8] text-white font-medium text-md py-2 px-4 rounded-xl">
                Write a Review
              </button>
            </div>

            {showInput && (
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <div key={star} onClick={() => handleStarClick(star)}>
                      {stars >= star ? (
                        <HiStar size={25} color="#FFD700" />
                      ) : (
                        <HiOutlineStar size={25} color="#FFD700" />
                      )}
                    </div>
                  ))}
                </div>

                <textarea
                  value={reviewText}
                  onChange={handleInputChange}
                  maxLength={1000}
                  className="border-2 border-gray-300 rounded-lg p-2 mt-5"
                  placeholder="Write your review here..."
                  rows={5}
                />
                <div className="text-gray-500 text-sm mt-1">{wordCount}/1000 characters</div>
                <button onClick={handleSubmit} className="bg-[#1F82E8] text-white font-medium text-md py-2 px-4 rounded-xl mt-3">
                  Submit Review
                </button>
              </div>
            )}

          </div>

          <div className="w-full md:w-[80%] mt-5 md:mt-0">
            <div className="mt-10">
              <ReviewList />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Profile;
