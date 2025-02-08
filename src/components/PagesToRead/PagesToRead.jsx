import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom'; // Assuming you're using react-router

const PagesToRead = () => {
    const [readBooks, setReadBooks] = useState([]);
    const bookData = useLoaderData(); 

    useEffect(() => {
        const getBooksFromList = (key) => {
            const storedBooks = JSON.parse(localStorage.getItem(key)) || [];
            return storedBooks;
        };

        const fetchedReadBooks = getBooksFromList('readBooks');

        // book ber korar usage


        const readBooksWithDetails = fetchedReadBooks.map(bookId => 
            bookData.find(book => book.bookId === bookId)
        );

        setReadBooks(readBooksWithDetails);
    }, [bookData]);

    const booksData = readBooks.map(book => ({
        name: book.bookName,
        pages: book.totalPages,
    }));

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Read Book Chart</h2>
            {booksData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={booksData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pages" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-center text-4xl text-gray-500">No books to display.</p>
            )}
        </div>
    );
};

export default PagesToRead;
