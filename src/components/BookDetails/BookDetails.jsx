import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { isBookInList, saveBookToList } from "../../utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find((book) => book.bookId == id);

    const handleSaveRead = (bookId) => {
        if (!isBookInList("readBooks", bookId)) {
            saveBookToList("readBooks", bookId);
            toast.success("Book added to Read list");
        } else {
            toast.error("Book is already in Read list");
        }
    };

    const handleSaveWishlist = (bookId) => {
        if (!isBookInList("wishlistBooks", bookId)) {
            saveBookToList("wishlistBooks", bookId);
            toast.success("Book added to Wishlist");
        } else {
            toast.error("Book is already in Wishlist");
        }
    };

    if (!book) {
        return <div>Book not found.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row lg:space-x-10 items-center lg:items-start">
                <div className="bg-gray-100 p-6 rounded-2xl w-full lg:w-1/2 flex justify-center">
                    <img className="max-w-xs h-96 lg:max-w-md rounded-md" src={book.image} alt={book.bookName} />
                </div>

                <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
                    <h1 className="text-4xl font-bold">{book.bookName}</h1>
                    <p className="text-xl text-gray-600 mt-1">By: {book.author}</p>

                    <div className="border-b border-gray-300 my-6"></div>

                    <p className="text-xl font-medium text-gray-700 mb-2">{book.category}</p>

                    <div className="text-lg mb-6">
                        <span className="font-semibold">Review: </span>
                        <span>{book.review}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-4">
                        {book.tags.map((tag, index) => (
                            <span key={index} className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col space-y-3 mt-6">
                        <div>
                            <span className="font-semibold">Number of Pages: </span>{book.totalPages}
                        </div>
                        <div>
                            <span className="font-semibold">Publisher: </span>{book.publisher}
                        </div>
                        <div>
                            <span className="font-semibold">Year of Publishing: </span>{book.yearOfPublishing}
                        </div>
                        <div>
                            <span className="font-semibold">Rating: </span>{book.rating}
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-8">
                        <button
                            className="border border-gray-400 text-gray-800 px-6 py-2 rounded-lg"
                            onClick={() => handleSaveRead(book.bookId)}
                        >
                            Read
                        </button>
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                            onClick={() => handleSaveWishlist(book.bookId)}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
