import Faq from "./Faq";

const FAQList = () => {

    const faqs = [
        { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis. Sed nisi lacus sed viverra tellus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Tellus orci ac auctor augue mauris augue. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Aliquam malesuada bibendum arcu vitae elementum. Nunc mattis enim ut tellus elementum sagittis vitae. Orci porta non pulvinar neque laoreet. Montes nascetur ridiculus mus mauris vitae ultricies. Laoreet id donec ultrices tincidunt arcu non sodales. Gravida arcu ac tortor dignissim convallis.' },
        { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', answer: 'You can track your order by...' },
        { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', answer: 'You can track your order by...' },
        { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', answer: 'Yes, you can purchase items again by...' },
    ];

    return (
        <>
            <h1 className="text-3xl font-bold text-center lg:text-left text-[#181B38]">FAQ</h1>
            <div className="mt-6">
                {faqs.map((faq, index) => (
                    <Faq key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div></>
    )
}

export default FAQList