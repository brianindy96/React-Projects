import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { getAllBooks } from '../services/book.service'

const Home = () => {

    const [books, setBooks] = useState([]);
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
    useEffect(() => {
        fetchBooks();
    }, [])
  return (
    <div className='max-w-7xl m-auto h-full'>
        <div className='py-5'>
            <div className='container py-5'>
                <Link to="add">
                    <button className='text-white border px-7 p-2 bg-blue-400 hover:bg-blue-300 rounded-2xl '>
                            Add Book
                        </button>
                </Link>
            </div>
        </div>
        <div className='min-h-screen'>
            <div className='flex flex-wrap gap-20 justify-start flex-start' id='wrapper'>
                {books.map((book) => (
                    <div className='min-h-120 w-95 flex flex-col shadow-lg justify-center bg-white py-8 px-4 text-center rounded-2xl' key={book.id}>
                        <p><strong>Title: </strong> {book.title}</p>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Pages:</strong> {book.pages}</p>
                        <p><strong>Read:</strong> {book.completed === true ? "Yes" : "No"}</p>
                        <div className='mt-5'>
                            <Link to="/edit">
                                <button className='bg-gray-100 hover:bg-gray-200 border rounded-lg mx-2 px-5 py-1'>Edit</button>
                            </Link>
                                <button className='bg-red-500 hover:bg-red-400 text-white border rounded-lg mx-2 py-1 px-5'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home