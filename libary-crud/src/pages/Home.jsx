import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { deleteBook, getAllBooks } from '../services/dataServices'

const Container = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const BookCon = styled.div`
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    border: 1px solid black;
    margin: 10px;
    padding: 20px;
    text-align: center;
`


const Home = ({ bookId }) => {

    const [books, setBooks] = useState([])

    
    const handleDelete = async (id) => {
      await deleteBook(id);
      getBooks(); // fetch the updated list of books after deleting a book
    }
    
    const getBooks = async () => {
      const data = await getAllBooks();
      setBooks(data.docs.map((doc) => ({
         
        ...doc.data(),
        id: doc.id,
      })))
    }
  
    console.log(books);
  
    useEffect(() => {
      getBooks();
    }, [])


  return (
    <>
        <button className="w-full mt-5 h-[5]"><Link to="/add">ADD</Link></button>
        <Container>
            {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
            {books.map((book) => (
                <BookCon key={book.id}>
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Pages: {book.pages}</p>
                    <p>Read: {book.completed ? "Yes" : "No"}</p>
                    <button onClick={(e) => bookId(book.id)}><Link to="/edit">Edit</Link></button>
                    <button onClick={(e) => handleDelete(book.id)}>Delete</button>
                </BookCon>
            ))}
        </Container>
    </>
    
  )
}

export default Home