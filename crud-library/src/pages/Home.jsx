import React from 'react'
import { Button } from "@mui/material"
const books = [
    {
    id: 1,
    title: "Harry Potter: Prisoner of Red Light District",
    author: "J.K. Rowling",
    pages: "593",
    completed: true,
    },
    {
        id: 2,
        title: "Harry Potter: Prisoner of Red Light District",
        author: "J.K. Rowling",
        pages: "593",
        completed: false,
    },
    {
        id: 3,
        title: "Harry Potter: Prisoner of Red Light District",
        author: "J.K. Rowling",
        pages: "593",
        completed: true,
    },
    {
        id: 4,
        title: "Harry Potter: Prisoner of Red Light District",
        author: "J.K. Rowling",
        pages: "342",
        completed: false,
    },

]
const Home = () => {
  return (
    <div className='max-w-7xl m-auto'>
        <div className='py-5'>
            <div className='container py-5'>
                <button className='text-white border px-7 p-2 bg-blue-300 rounded-2xl '>
                    Add Book
                </button>
            </div>
        </div>
        <div className=''>
            yo
        </div>
    </div>
  )
}

export default Home