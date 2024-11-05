import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import member1 from '../assets/members/karthik.png';
import member2 from '../assets/members/Farhan.png';
import member3 from '../assets/members/kavya.png';
import member4 from '../assets/members/nikita.png';
import member5 from '../assets/members/shreya.png';

import back1 from '../assets/members/karthikBack.png';
import back2 from '../assets/members/farhanBack.png';
import back3 from '../assets/members/kavyaBack.png';
import back4 from '../assets/members/nikitaBack.png';
import back5 from '../assets/members/shreyaBack.png';
import ourTeam from '../assets/ourTeam.png';

type ProfileCardProps = {
    image1: string;
    image2: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ image1, image2 }) => (
    <div className="group h-80 w-72 lg:w-80 [perspective:1000px]">
        <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                <div className='flex flex-col items-center h-full rounded-3xl'>
                    <img src={image1} alt='profile' className='w-full h-full object-cover object-top' />
                </div>
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 h-full w-full bg-[#041893] rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                <div className='flex flex-col items-center h-full rounded-3xl'>
                    <img src={image2} alt='profile' className='w-full h-full object-cover object-top' />
                </div>
            </div>
        </div>
    </div>
);

const OurTeam = () => {
    const teamMembers = [
        { image1: member1, image2: back1 },
        { image1: member2, image2: back2 },
        { image1: member3, image2: back3 },
        { image1: member4, image2: back4 },
        { image1: member5, image2: back5 },
    ];

    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex flex-col lg:flex-row mt-20 lg:mt-40 px-6 lg:px-24 items-center'>
                <div className='flex flex-col w-full lg:w-1/2 lg:pr-10 mb-4 lg:mb-0'>
                    <h1 className='text-[36px] lg:text-[50px] font-ptSans font-bold mb-8 lg:mb-12 mt-10'>Who we are?</h1>
                    <p className='text-base lg:text-lg font-normal tracking-wide'>
                        At <span className='text-gray-700 font-bold'>Kaamback</span>, we're more than just an agency; we're your dedicated allies in the journey of business success. Founded by a team of passionate entrepreneurs and industry experts, our mission is clear: to help small businesses thrive and flourish in the digital age.
                    </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img src={ourTeam} alt='Who we are' className='w-full h-auto' />
                </div>
            </div>
            <div className="bg-white px-4 lg:px-24 mt-10 lg:mt-[100px]">
                <div className="flex flex-row h-24 items-center">
                    <div className="w-[6px] bg-[#181B38] h-20 mr-4"></div>
                    <h1 className="text-[36px] lg:text-[50px] font-bold text-[#181B38] leading-10">Meet our team members</h1>
                </div>
                <div className='flex items-center flex-wrap justify-center gap-8 lg:gap-x-48 gap-y-20 mt-12'>
                    {teamMembers.map((member, index) => (
                        <ProfileCard
                            key={index}
                            image1={member.image1}
                            image2={member.image2}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurTeam;
