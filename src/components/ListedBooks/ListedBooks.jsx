import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import { getBooksFromList } from '../../utility/localstorage';
import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    const bookData = useLoaderData();

    useEffect(() => {
        const fetchedReadBooks = getBooksFromList('readBooks');
        const fetchedWishlistBooks = getBooksFromList('wishlistBooks');

        const readBooksWithDetails = fetchedReadBooks.map(bookId => bookData.find(book => book.bookId === bookId));
        const wishlistBooksWithDetails = fetchedWishlistBooks.map(bookId => bookData.find(book => book.bookId === bookId));

        setReadBooks(readBooksWithDetails);
        setWishlistBooks(wishlistBooksWithDetails);
    }, [bookData]);

    return (
        <div className="container mx-auto py-12">
            <div className="text-4xl text-center bg-gray-200 rounded-xl my-12 p-6">
                <p>Books Collection</p>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h1 className="text-xl my-6">Read Books: {readBooks.length}</h1>
                    <div className="flex flex-col gap-8">
                        {readBooks.map((book, index) => (
                            <div key={index} className="p-6 rounded-2xl border border-gray-200 flex flex-col lg:flex-row gap-6 bg-white shadow-md">
                                <div className="flex items-center justify-center bg-gray-100 rounded-2xl border-2 border-gray-200 w-full lg:w-52">
                                    <img
                                        src={book.image}
                                        alt={book.bookName}
                                        className="rounded-2xl object-cover md:w-[129.32px] md:h-[172px] "
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-[#131313] text-2xl font-bold font-['Playfair Display']">{book.bookName}</h2>
                                        <p className="text-[#131313]/80 text-base font-medium font-['Work Sans']">By: {book.author}</p>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-wrap gap-3">
                                            <span className="text-[#131313] text-base font-bold font-['Work Sans']">Tag:</span>
                                            {book.tags?.map((tag, idx) => (
                                                <span key={idx} className="bg-[#23be0a]/10 text-[#23be0a] px-3 py-1 rounded-full text-sm font-medium font-['Work Sans']">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MdOutlineDateRange className="text-[#131313]/80 text-xl" />
                                            <p className="text-[#131313]/80 text-base font-normal font-['Work Sans']">Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[#131313]/60 text-base font-normal font-['Work Sans']">Publisher: {book.publisher}</p>
                                        <p className="text-[#131313]/60 text-base font-normal font-['Work Sans']">Pages: {book.totalPages}</p>
                                    </div>

                                    <div className="border-t border-gray-300 mt-2"></div>

                                    <div className="flex flex-wrap justify-start gap-4 mt-4">
                                        <span className="px-4 py-2 bg-[#328eff]/20 text-[#328eff] rounded-full text-sm font-medium font-['Work Sans']">Category: {book.category}</span>
                                        <span className="px-4 py-2 bg-[#ffac33]/20 text-[#ffac33] rounded-full text-sm font-medium font-['Work Sans']">Rating: {book.rating}</span>
                                        <Link to={`/book/${book.bookId}`} className="px-6 py-2 bg-[#23be0a] rounded-full text-white text-lg font-medium font-['Work Sans'] hover:bg-[#1e9a08] transition-all">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1 className="text-xl my-6">Wishlist Books: {wishlistBooks.length}</h1>
                    <div className="flex flex-col gap-8">
                        {wishlistBooks.map((book, index) => (
                            <div key={index} className="p-6 rounded-2xl border border-gray-200 flex flex-col lg:flex-row gap-6 bg-white shadow-md">
                                <div className="flex items-center justify-center bg-gray-100 rounded-2xl border-2 border-gray-200 w-full lg:w-52">
                                    <img
                                        src={book.image}
                                        alt={book.bookName}
                                        className="rounded-2xl object-cover md:w-[129.32px] md:h-[172px] "
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-[#131313] text-2xl font-bold font-['Playfair Display']">{book.bookName}</h2>
                                        <p className="text-[#131313]/80 text-base font-medium font-['Work Sans']">By: {book.author}</p>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-wrap gap-3">
                                            <span className="text-[#131313] text-base font-bold font-['Work Sans']">Tag:</span>
                                            {book.tags?.map((tag, idx) => (
                                                <span key={idx} className="bg-[#23be0a]/10 text-[#23be0a] px-3 py-1 rounded-full text-sm font-medium font-['Work Sans']">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MdOutlineDateRange className="text-[#131313]/80 text-xl" />
                                            <p className="text-[#131313]/80 text-base font-normal font-['Work Sans']">Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[#131313]/60 text-base font-normal font-['Work Sans']">Publisher: {book.publisher}</p>
                                        <p className="text-[#131313]/60 text-base font-normal font-['Work Sans']">Pages: {book.totalPages}</p>
                                    </div>

                                    <div className="border-t border-gray-300 mt-2"></div>

                                    <div className="flex flex-wrap justify-start gap-4 mt-4">
                                        <span className="px-4 py-2 bg-[#328eff]/20 text-[#328eff] rounded-full text-sm font-medium font-['Work Sans']">Category: {book.category}</span>
                                        <span className="px-4 py-2 bg-[#ffac33]/20 text-[#ffac33] rounded-full text-sm font-medium font-['Work Sans']">Rating: {book.rating}</span>
                                        <Link to={`/book/${book.bookId}`} className="px-6 py-2 bg-[#23be0a] rounded-full text-white text-lg font-medium font-['Work Sans'] hover:bg-[#1e9a08] transition-all">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>

            <Tabs className="p-3 md:p-0">





            </Tabs>
        </div>
    );
};

export default ListedBooks;
