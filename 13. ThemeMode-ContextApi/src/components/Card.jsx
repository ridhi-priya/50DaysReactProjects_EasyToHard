


export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVI8YKq_KkFYseU9pLQqNwE_czxDWF2w-eZw&s" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Dogs do speak, but only to those who know how to listen.
                    </h5>
                </a>
                
                <div className="flex items-center justify-end">
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Save to Galary
                    </a>
                </div>
            </div>
        </div>
    );
}