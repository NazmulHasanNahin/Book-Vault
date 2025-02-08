import { useEffect, useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const PagesToRead = () => {
    const [booksData, setBooksData] = useState([]);

    // Function to fetch read books from localStorage
    useEffect(() => {
        const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
console.log(readBooks);
        // Map the data to extract book names and pages
        const formattedData = readBooks.map(book => ({
            name: book.bookName,
            pages: book.totalPages,
        }));
console.log(formattedData);
        setBooksData(formattedData);
    }, []);

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Pages to Read</h2>
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
                <p className="text-center text-gray-500">No books to display.</p>
            )}
        </div>
    );
};

export default PagesToRead;
