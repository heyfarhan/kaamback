import { FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logoBlue.png';
import kaamback from '../assets/KaamBack (2).png';

const footerCols = [
    {
        title: "Categories",
        items: ["Programming & Tech", "Business", "Design", "Blockchain", "Digital Marketing"]
    },
    {
        title: "Community",
        items: ["Community Hub", "Forum", "Events", "Blogs"]
    },
    {
        title: "About",
        items: [
            { label: "About KaamBack", path: "/#about" },
            { label: "Careers", path: "/career" },
            { label: "Press and notes" },
            { label: "Privacy Policy" },
            { label: "Terms of Services" }
        ]
    },
    {
        title: "Support",
        items: ["Help and Support", "Company guide", "Freelancer guide"]
    }
];

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path:any) => {
        if (path === "/#about") {
            navigate("/", { replace: true });
            setTimeout(() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            navigate(path);
        }
    };

    return (
        <footer className="flex flex-col items-center bg-white mt-5 py-10">
            <div className="flex flex-col lg:flex-col justify-between w-full mb-6 lg:px-8 px-2">
                <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                    <div className='flex flex-row items-center'>
                        <img src={logo} alt="Logo" className="w-[30px] lg:w-[50px] h-auto" />
                        <img src={kaamback} alt="Logo" className="ml-2 h-[40px] w-[220px]" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-between w-full lg:w-auto lg:mt-10 mt-6 lg:px-16">
                    {footerCols.map((section, index) => (
                        <div className="flex flex-col mb-6 lg:mb-0 w-full lg:w-auto px-4 lg:px-0" key={index}>
                            <h1 className="text-xl lg:text-2xl font-bold mb-4 text-[#041893]">{section.title}</h1>
                            {section.items.map((item, idx) => (
                                typeof item === 'string' ? (
                                    <p className="text-md lg:text-lg font-medium hover:cursor-pointer" key={idx}>{item}</p>
                                ) : (
                                    <p
                                        className="text-md lg:text-lg font-medium hover:cursor-pointer"
                                        onClick={() => handleNavigation(item.path)}
                                        key={idx}
                                    >
                                        {item.label}
                                    </p>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-[1px] bg-black lg:mt-10 mt-4"></div>
            <div className="mt-8">
                <div className="flex flex-row lg:gap-x-10 gap-x-5 justify-center">
                    <div className="flex items-center cursor-pointer">
                        <FaFacebook size={40} />
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <RiInstagramFill size={40} />
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <FaXTwitter size={40} />
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <FaLinkedin size={40} />
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <FaGoogle size={40} />
                    </div>
                </div>
            </div>
            <div className="mt-6 lg:mt-8 w-full">
                <p className="text-center text-md lg:text-lg font-semibold">&#169; KaamBack, 2024. <span className="text-[#827B5A]">All Rights Reserved.</span></p>
            </div>
        </footer>
    );
};

export default Footer;
