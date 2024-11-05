import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img1 from '../assets/careerImg.png';
import img2 from '../assets/careerImg1.png';
import img3 from '../assets/careerLocation.png';
import img4 from '../assets/careerWorkers.png';
import img5 from '../assets/careerEducation.png';
import img6 from '../assets/careerAward.png';
import { useNavigate } from "react-router-dom";

const Career = () => {
 const navigate = useNavigate();

const handleSubmit = ()=>{
  navigate("/openings");
}

  return (
    <div className="mx-auto bg-[#FFFDF3] w-full">
      <Navbar />
      <div className='flex flex-col lg:flex-row mt-28 lg:mt-40 px-6 lg:px-24 items-center'>
        <div className='flex flex-col w-full lg:w-[60%] lg:pr-20'>
          <h1 className='text-[36px] lg:text-[50px] font-ptSans font-bold mb-8 lg:mb-16'>
            Join Our Team At <span className="block text-[#041893]">KaamBack</span>
          </h1>
          <p className='font-normal tracking-wide text-base lg:text-lg'>
            Work at the most dynamic and successful agency! At Kaamback, we are dedicated to delivering top-notch digital solutions to a diverse range of clients by blending creativity with functionality.
          </p>
          <button onClick={handleSubmit} className="px-6 py-4 bg-gradient-to-r from-[#0177ED] to-[#5DC2EA] w-48 lg:w-60 rounded-full text-lg lg:text-xl text-white font-semibold mt-8 lg:mt-16">
            View Openings
          </button>
        </div>
        <div className='w-full lg:w-[40%] flex justify-center items-center mt-8 lg:mt-0'>
          <img src={img1} alt='Join our team' className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center px-6 lg:px-24 mt-20">
        <div className="w-full lg:w-[40%] flex justify-center items-center mb-8 lg:mb-0">
          <img src={img2} alt="Teamwork" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-[60%] flex flex-row flex-wrap gap-8 lg:gap-x-32 justify-center items-start">
          <div className="flex flex-col bg-[#EAE5E5] p-6 w-full sm:w-[300px] rounded-2xl">
            <img src={img3} alt="Easy Location" className="h-[60px] w-[40px]"/>
            <h1 className="text-xl lg:text-2xl font-poppins font-semibold mt-6">Easy Location</h1>
            <p className="text-base lg:text-lg font-poppins font-normal mt-2">Commute easily to work at your convenience and enjoy compensation for transport cost</p>
          </div>
          <div className="flex flex-col bg-[#EAE5E5] p-6 w-full sm:w-[300px] rounded-2xl lg:mt-40">
            <img src={img4} alt="Great Co-Workers" className="h-[60px] w-[60px]"/>
            <h1 className="text-xl lg:text-2xl font-poppins font-semibold mt-6">Great Co-Workers</h1>
            <p className="text-base lg:text-lg font-poppins font-normal mt-2">Work with some of the best talent in the industry and build strong networks with them</p>
          </div>
          <div className="flex flex-col bg-[#EAE5E5] p-6 w-full sm:w-[300px] rounded-2xl">
            <img src={img5} alt="Education Opportunity" className="h-[60px] w-[60px]"/>
            <h1 className="text-xl lg:text-2xl font-poppins font-semibold mt-6">Education Opportunity</h1>
            <p className="text-base lg:text-lg font-poppins font-normal mt-2">Get resources for developing your skills and knowledge to kickstart your career</p>
          </div>
          <div className="flex flex-col bg-[#EAE5E5] p-6 w-full sm:w-[300px] rounded-2xl lg:mt-40">
            <img src={img6} alt="Performance Award" className="h-[60px] w-[60px]"/>
            <h1 className="text-xl lg:text-2xl font-poppins font-semibold mt-6">Performance Award</h1>
            <p className="text-base lg:text-lg font-poppins font-normal mt-2">Get awarded for better performance every 6 months and be recognised</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
