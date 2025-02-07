import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-[#f3f3f3] rounded-2xl mt-5 p-8">
            <div className="md:flex justify-between items-center">

                <div className="text-center md:text-left md:max-w-lg mb-6 md:mb-0">
                    <h1 className="text-[#131313] text-4xl md:text-5xl font-bold leading-tight">
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Explore our handpicked selection to bring new life to your reading space.
                    </p>
                    <div className="mt-6">
                        <Link to="/listed-books" className="px-6 py-3 bg-[#23be0a] text-white rounded-lg text-lg font-bold transition-all duration-300 transform hover:bg-[#1e9b08] hover:scale-105">
                            View The List
                        </Link>
                    </div>
                </div>

                {/* img  */}
                <div className="md:max-w-xs">
                    <img
                        src="https://i.ibb.co/rDg5mtK/pngwing-1.png"
                        alt="Books"
                        className="w-full h-auto rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
