import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
const Books = () => {

  const [books, setBooks] = useState([]);

  // FetchBooks GET
  const fetchAllBooks = async () => {
    
    try{
      const res = await axios.get('http://localhost:8800/books');
      setBooks(res.data);
    
    } catch(error){ 
      console.log(error);
    }
  }

  console.log(books);

  // UseEffects
  useEffect(() => {
    fetchAllBooks();
  }, [])
  



  return (
    <div>
        <h1>Library</h1>
        <div className='books'>
          {books.map((book) => (
            <div className='book' key={book.id}>
              {book.cover && <img src={book.cover} alt="book cover" className='book-img' />}
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <button className='delete'>Delete</button>
              <button className='update'>Update</button>
            </div>
          ))}
        </div>
        <button><Link to="/add">Add New Book</Link></button>
    </div>
  )
}

export default Books