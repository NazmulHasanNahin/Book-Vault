
const getStoredBooks = (listName) => {
    const storedBooks = localStorage.getItem(listName);
    if (storedBooks) {
        return JSON.parse(storedBooks);
    } else {
        return [];
    }
};

const saveBookToList = (listName, bookId) => {
    const storedBooks = getStoredBooks(listName);
    const existBook = storedBooks.find(storedBookId => storedBookId === bookId);

    if (!existBook) {
        storedBooks.push(bookId);
        localStorage.setItem(listName, JSON.stringify(storedBooks));
    }
};

const isBookInList = (listName, bookId) => {
    const storedBooks = getStoredBooks(listName);
    return storedBooks.includes(bookId);
};

const getBooksFromList = (listName) => {
    const storedBooks = localStorage.getItem(listName);
    return storedBooks ? JSON.parse(storedBooks) : [];
};



export { getStoredBooks, saveBookToList, isBookInList,getBooksFromList };
