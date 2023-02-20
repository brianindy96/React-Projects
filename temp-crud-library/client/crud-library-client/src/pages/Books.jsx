import React, { useEffect, useState } from 'react'
import axios from "axios"
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
      Books
    </div>
  )
}

export default Books