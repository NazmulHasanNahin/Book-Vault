import { Link, useLoaderData } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
const BookSection = () => {
    const booksdata = useLoaderData();
    // console.log(booksdata);

    return (
        <div className="container mx-auto px-4 mb-14">
            <div>
                <p className="text-4xl font-medium text-center my-16">Books</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {booksdata.map((book) => (
                    <Link to={`/book/${book.bookId}`} key={book.bookId} className="group">
                        <div className="h-[230px] bg-[#f3f3f3] rounded-2xl flex justify-center items-center">
                            <img className="w-[134px] h-[166px]" src={book.image} />
                        </div>


                        <div className="bg-white shadow-lg rounded-xl p-4 transition transform hover:scale-105 hover:shadow-xl">

                            <div className="flex flex-wrap space-x-2 mb-2">
                                {book.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#eafbe7] text-[#23be0a] text-xs font-semibold px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-lg font-bold text-gray-800">{book.bookName}</h3>
                            <p className="text-sm text-gray-600">By: {book.author}</p>
                            <div className="h-[0px] mt-4 border border-dashed border-[#131313]/20"></div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-gray-500">{book.category}</p>
                                <p className="flex items-center">
                                    <span className="text-base font-semibold mr-2 text-gray-600">
                                        {book.rating.toFixed(2)}
                                    </span>
                                    <FaRegStar className="text-gray-600" />
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BookSection;
