import React, { useState } from 'react'
import styled from 'styled-components'
import { updateBooks } from '../services/dataServices';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    
`

const Edit = ({ bookId }) => {

    const [newBook, setNewBook] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewBook(values => ({ 
            ...values,
            [name] : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            if(newBook){
                await updateBooks(bookId, newBook);
                navigate("/");
            }
        } catch(err){
            console.log(err.message)
        }
    }

    console.log(newBook);
  return (
    <Container>
        {/* Form */}
        <form onSubmit={handleSubmit}  style={{display: "flex", flexDirection: "column"}}>
            <input type="text" required value={newBook.title} name='title' onChange={handleChange}/>
            <input type="text" required value={newBook.author} name='author' onChange={handleChange} />
            <input type="text" required value={newBook.status} name='status' onChange={handleChange} />
            <button type="submit">Update</button>
        </form>
    </Container>
  )
}

export default Edit