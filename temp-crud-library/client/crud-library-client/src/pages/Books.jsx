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
  
  const handleDelete = async (id) => {
    try{
        await axios.delete("http://localhost:8800/books"+id)
        window.location.reload();
    }catch(err){
        console.log(err);
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
              <button onClick={() => handleDelete(book.id)} className='delete'>Delete</button>
              <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>
            </div>
          ))}
        </div>
        <button><Link to="/add">Add New Book</Link></button>
    </div>
  )
}

export default Books