import avatar from '../assets/avatar.png';

interface ReviewProps {
    user: string;
    company: string;
    rating: number;
    reviewText: string;
    helpfulCount: number;
    timeAgo: string;
}

const Review: React.FC<ReviewProps> = ({ user, company, rating, reviewText, helpfulCount, timeAgo }) => {
    return (
        <article className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
                <img className="w-[56px] h-[56px] me-4 rounded-full" src={avatar} alt={`${user} avatar`} />
                <div className="font-medium dark:text-white">
                    <p>
                        {user}
                        <span className="block text-sm text-gray-500 dark:text-gray-400">{company}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                        key={index}
                        className={`w-4 h-4 ${index < rating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                    {rating} <span className="text-gray-500">| {timeAgo}</span>
                </h3>
            </div>
            <p className="my-2 text-black font-normal font-md tracking-tight">{reviewText}</p>
            <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{helpfulCount} people found this helpful</p>
                <div className="flex items-center mt-3">
                    <a
                        href="#"
                        className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Helpful
                    </a>
                </div>
            </aside>
        </article>
    );
};

const ReviewList = () => {
    const reviews = [
        {
            user: 'Jese Leos',
            company: 'Company name',
            rating: 4,
            reviewText: 'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.',
            helpfulCount: 19,
            timeAgo: '3 weeks ago',
        },
        {
            user: 'Jese Leos',
            company: 'Company name',
            rating: 4,
            reviewText: 'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.',
            helpfulCount: 19,
            timeAgo: '3 weeks ago',
        },
        {
            user: 'Jese Leos',
            company: 'Company name',
            rating: 4,
            reviewText: 'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.',
            helpfulCount: 19,
            timeAgo: '3 weeks ago',
        },
        {
            user: 'Jese Leos',
            company: 'Company name',
            rating: 4,
            reviewText: 'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.',
            helpfulCount: 19,
            timeAgo: '3 weeks ago',
        },

    ];

    return (
        <div className="flex flex-col w-full lg:w-[60%] gap-y-10 px-4 lg:px-8">
            {reviews.map((review, index) => (
                <Review key={index} {...review} />
            ))}
            <button className="bg-[#BFE0FF] px-10 py-2 rounded-xl w-full lg:w-60 self-center">
                <p className="text-md font-semibold">Show More Reviews</p>
            </button>
        </div>
    );
};

export default ReviewList;
