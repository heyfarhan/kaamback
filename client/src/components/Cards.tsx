import { FaArrowAltCircleRight } from "react-icons/fa"

const domains = [
    { name: "Technology", bgImage: "bg-custom-image1" },
    { name: "Business", bgImage: "bg-custom-image2" },
    { name: "Finance", bgImage: "bg-custom-image3" },
    { name: "Engineering", bgImage: "bg-custom-image4" },
    { name: "Marketing", bgImage: "bg-custom-image5" }
];

const Cards = () => {
    return (
        <div>
            <div className='flex flex-row px-28 gap-x-10'>
                {domains.map((domain, index) => (
                    <div key={index} className={`h-[280px] w-[250px] rounded-xl ${domain.bgImage} bg-cover bg-center relative overflow-hidden group cursor-pointer`}>
                        <div className="absolute bottom-0 w-full h-1/3 bg-gray-600 bg-opacity-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:h-full">
                            <h1 className="text-white font-bold text-4xl font-ptSans">{domain.name}</h1>
                            <div className="hidden group-hover:block mt-2">
                                <FaArrowAltCircleRight color='white' size={40} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
