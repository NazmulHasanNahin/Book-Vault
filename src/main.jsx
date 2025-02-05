import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import Errorpage from './components/ErrorPage/Errorpage.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch('book.json'),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("book.json"),
      },


    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
