import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "./Footer";

const YourHires = () => {
    const hiresData = [
        { name: 'John Doe', hiredWhen: '15/01/2024', projectName: 'Project Alpha', days: 30, fee: '20,000' },
        { name: 'John Doe', hiredWhen: '15/01/2024', projectName: 'Project Beta', days: 45, fee: '30,000' },
        { name: 'John Doe', hiredWhen: '15/01/2024', projectName: 'Project Gamma', days: 60, fee: '40,000' },
        { name: 'John Doe', hiredWhen: '15/01/2024', projectName: 'Project Delta', days: 20, fee: '15,000' },
        { name: 'John Doe', hiredWhen: '15/01/2024', projectName: 'Project Delta', days: 20, fee: '15,000' },
        { name: 'John Doe', hiredWhen: '15/01/2024', projectName: 'Project Delta', days: 20, fee: '15,000' },
    ];

    const [dropdownVisible, setDropdownVisible] = useState(Array(hiresData.length).fill(false));

    const toggleDropdown = (index:any) => {
        const newDropdownVisible = dropdownVisible.map((item, idx) => (idx === index ? !item : false));
        setDropdownVisible(newDropdownVisible);
    };

    return (
        <div className="flex flex-col" style={{ paddingTop: '6rem' }}>
            <CompanyNavbar />

            <section className="bg-white py-16 px-4 lg:px-20">
                <h1 className="text-3xl font-bold text-center lg:text-left text-[#181B38]">Your Hires</h1>
                <div className="overflow-x-auto lg:overflow-visible mt-10">
                    <div className="min-w-[600px] lg:min-w-0">
                        <div className="flex flex-row justify-between">
                            <p className="text-2xl font-semibold text-black font-ptSans text-center flex-1">Name</p>
                            <p className="text-2xl font-semibold text-black font-ptSans text-center flex-1">Hired when</p>
                            <p className="text-2xl font-semibold text-black font-ptSans text-center flex-1">Project name</p>
                            <p className="text-2xl font-semibold text-black font-ptSans text-center flex-1">Days</p>
                            <p className="text-2xl font-semibold text-black font-ptSans text-center flex-1">Fee</p>
                            <p className="text-2xl font-semibold text-black font-ptSans text-center flex-[0.4]"></p>
                        </div>
                        {hiresData.map((hire, index) => (
                            <div key={index} className="flex flex-row justify-between mt-4 items-center relative">
                                <p className="text-xl text-black font-ptSans text-center flex-1">{hire.name}</p>
                                <p className="text-xl text-black font-ptSans text-center flex-1">{hire.hiredWhen}</p>
                                <p className="text-xl text-black font-ptSans text-center flex-1">{hire.projectName}</p>
                                <p className="text-xl text-black font-ptSans text-center flex-1">{hire.days}</p>
                                <p className="text-xl text-black font-ptSans text-center flex-1">{hire.fee}</p>
                                <div className="text-xl text-black font-ptSans text-center flex-[0.4] relative">
                                    <FaEllipsisVertical onClick={() => toggleDropdown(index)} className="cursor-pointer" />
                                    {dropdownVisible[index] && (
                                        <div className="absolute top-[-5px] bg-white border border-gray-300 w-[140px] rounded shadow-lg transition-all duration-300 ease-in-out transform left-5">
                                            <p className="py-1 text-gray-800 hover:bg-gray-100 cursor-pointer border-b-2 border-b-gray-200">CV</p>
                                            <p className="py-1 text-gray-800 hover:bg-gray-100 cursor-pointer border-b-2 border-b-gray-200">Portfolio</p>
                                            <p className="py-1 text-gray-800 hover:bg-gray-100 cursor-pointer">Profile</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default YourHires;
