import React, { useEffect, useState } from 'react'
import { Button, CircularProgress } from "@mui/material"
import { Link } from "react-router-dom"
import { deleteBook, getAllBooks } from '../services/book.service'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ getBookId }) => {

    // State and constants
    const [books, setBooks] = useState([]);

        console.log(books);

    // getBooksFromDatabase
    const fetchBooks = async () => {
        try{
            const data = await getAllBooks();

            setBooks(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              })))
        } catch(err){
            console.log(err.message);
        }
};

    const handleDelete = (id) => {
        deleteBook(id);
        toast.info('Deleting Book..', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            });
        fetchBooks(); // fetch the updated list of books after deleting a book
    }

    const finishedRead = books.reduce((count, item) => {
        return count + (item.read === true ? 1 : 0);
    }, 0)

    console.log(finishedRead);

    // UseEffects
    useEffect(() => {
        fetchBooks();
    }, [])
  return (
    <div className='max-w-7xl m-auto h-full px-5 xl:px-0'>
        <div className='py-5'>
            <div className='container flex flex-wrap justify-center place-items-center py-5 w-full sm:justify-between'>
                <Link to="add">
                    <button className='text-white border px-10 p-2 bg-blue-400 hover:bg-blue-300 rounded-2xl '>
                            Add Book
                        </button>
                </Link>
                <div className='mt-5 transition-all duration-150'>
                    <div className='bg-gray-600 text-white px-20 mx-5 sm:px-24 border-2 border-white py-1 rounded-md shadow-sm'>
                        <p className='text-center  font-bold text-xl'>Scoreboard</p>
                        <p className='text-gray-200'>Total Books: {books.length}</p>
                        <p className='text-gray-200'>Read: {finishedRead}</p>
                        <p className='text-gray-200'>Reading: {books.length - finishedRead} </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-screen transition-all duration-300'>
            <div className='flex flex-wrap gap-20 justify-start flex-start transition-all duration-300' id='wrapper'>
                {books.length > 0 ? (
                    <>
                    {books.map((book) => (
                        <div className='min-h-full leading-loose w-95 flex flex-col shadow-lg justify-center bg-white py-8 px-4 text-center rounded-2xl' key={book.id}>
                            <p><strong>Title: </strong> {book.title}</p>
                            <p><strong>Author:</strong> {book.author}</p>
                            <p><strong>Pages:</strong> {book.pages}</p>
                            <p><strong>Status:</strong> {book.read === true ? (
                                <span className='text-green-600 font-extrabold'>Finished</span>
                            ): (
                                <span className='text-red-500 font-extrabold'>Not Finished</span>
                            )}</p>
                            <div className='mt-5'>
                                <Link to="/edit">
                                    <button onClick={(e) => getBookId(book.id)} className='bg-gray-100 hover:bg-gray-200 border rounded-lg mx-2 px-5 py-1'>Edit</button>
                                </Link>
                                    <button onClick={(e) => handleDelete(book.id)} className='bg-red-500 hover:bg-red-400 text-white border rounded-lg mx-2 py-1 px-5'>Delete</button>
                            </div>
                        </div>
                    ))}
                    </>
                ) : (
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "50vh", margin: "auto 0"}}>
                        <p className='mb-4 text-lg tracking-wide'>Fetching Books...</p>
                        <CircularProgress />
                    </div>
                ) }
                
            </div>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  )
}

export default Home