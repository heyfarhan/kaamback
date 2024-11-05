import { useState, useRef, useEffect } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface FaqProps {
    question: string;
    answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b-2 border-black mb-4 py-4">
            <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={toggleOpen}
            >
                <h4 className="font-semibold text-[18px]">{question}</h4>
                <button className="text-xl">{isOpen ? <BiChevronUp size={25}/> : <BiChevronDown size={25}/>}</button>
            </div>
            <div 
                className={`overflow-hidden transition-height duration-300 ease-in-out`} 
                style={{ height: `${height}px` }} 
                ref={contentRef}
            >
                <div className="pt-2 text-[15px]">{answer}</div>
            </div>
        </div>
    );
};

export default Faq;
