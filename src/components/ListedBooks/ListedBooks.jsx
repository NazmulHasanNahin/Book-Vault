import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import { getBooksFromList } from '../../utility/localstorage'; // Function to fetch books from local storage
import { Link } from 'react-router-dom';

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        // Fetch books from local storage for Read and Wishlist tabs
        const fetchedReadBooks = getBooksFromList('readBooks') || [];
        const fetchedWishlistBooks = getBooksFromList('wishlistBooks') || [];
        setReadBooks(fetchedReadBooks);
        setWishlistBooks(fetchedWishlistBooks);
    }, []);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortBooks = (books) => {
        if (sortOption === 'rating') {
            return books.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === 'pages') {
            return books.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortOption === 'year') {
            return books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return books;
    };

    return (
        <div>
            {/* Header */}
            <div className="text-4xl text-center bg-gray-200 rounded-xl my-12 p-6">
                <p>Books</p>
            </div>

            {/* Sort Dropdown */}
            <div className="text-center mb-6">
                <label htmlFor="sort" className="text-lg mr-3">Sort by:</label>
                <select id="sort" className="border px-4 py-2 rounded-lg" value={sortOption} onChange={handleSortChange}>
                    <option value="">None</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year">Published Year</option>
                </select>
            </div>

            {/* Tabs for Read & Wishlist */}
            <Tabs className="p-3 md:p-0">
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                {/* TabPanel for Read Books */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {readBooks.length > 0 ? (
                            sortBooks(readBooks).map((book) => (
                                <div key={book.bookId || `read-book-${book.bookName || 'Unknown'}-${book.author || 'Unknown'}`} className="border rounded-lg p-4 shadow-md">
                                    <img className="w-full h-64 object-cover rounded-md mb-4" src={book.image} alt={book.bookName} />
                                    <h2 className="text-xl font-bold">{book.bookName}</h2>
                                    <p className="text-gray-600">By: {book.author}</p>
                                    <p className="text-gray-600">Category: {book.category}</p>
                                    <p className="text-gray-600">Rating: {book.rating}</p>
                                    
                                    {/* Safeguard for book.tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {book.tags?.map((tag, index) => (
                                            <span key={`tag-${book.bookId || book.bookName}-${index}`} className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link to={`/books/${book.bookId}`}>
                                        <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg w-full">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No read books available.</p>
                        )}
                    </div>
                </TabPanel>

                {/* TabPanel for Wishlist Books */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistBooks.length > 0 ? (
                            sortBooks(wishlistBooks).map((book) => (
                                <div key={book.bookId || `wishlist-book-${book.bookName || 'Unknown'}-${book.author || 'Unknown'}`} className="border rounded-lg p-4 shadow-md">
                                    <img className="w-full h-64 object-cover rounded-md mb-4" src={book.image} alt={book.bookName} />
                                    <h2 className="text-xl font-bold">{book.bookName}</h2>
                                    <p className="text-gray-600">By: {book.author}</p>
                                    <p className="text-gray-600">Category: {book.category}</p>
                                    <p className="text-gray-600">Rating: {book.rating}</p>
                                    
                                    {/* Safeguard for book.tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {book.tags?.map((tag, index) => (
                                            <span key={`tag-${book.bookId || book.bookName}-${index}`} className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link to={`/books/${book.bookId}`}>
                                        <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg w-full">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No wishlist books available.</p>
                        )}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
