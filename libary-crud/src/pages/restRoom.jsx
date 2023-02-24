import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase-config'
import { addBooks } from '../services/dataServices'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    
`


const Add = () => {

    const [read, setRead] = useState(false);

    const handleOptionChange = (event) => {
        const value = event.target.value === 'true';
        setRead(value);
      }

    const navigate = useNavigate();

    // const [book, setBook] = useState({});
    const [book, setBook] = useState({
        title: '',
        author: '',
        pages: '',
        completed: false,
      });

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setBook(values => ({ 
    //         ...values,
    //         [name] : value,
    //     }))

    // }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
      
        if (name === 'completed') {
          setBook((prevBook) => ({
            ...prevBook,
            [name]: value === 'true', // convert the string value to boolean
          }));
        } else {
          setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
          }));
        }
      };

    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     console.log(book);
        
    //     try{
    //         if(book){
    //             await addBooks(book);
    //             navigate("/");
    //         }
    //     } catch(err){
    //         console.log(err.message)
    //     }
        
    //     setBook({});

    //     // Navigation take us back to home
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        console.log(book);
        
        try {
          if (book) {
            await addBooks({
              ...book,
              read: book.read === 'true', // convert read value to boolean
            });
            navigate("/");
          }
        } catch(err) {
          console.log(err.message)
        }
        
        setBook({});
      }

    console.log(book);
    


  return (
    <Container>
        {/* Form */}
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <input type="text" required value={book.title} name='title' onChange={handleChange}/>
            <input type="text" required value={book.author} name='author' onChange={handleChange} />
            <input type="number" required value={book.pages} name='pages' onChange={handleChange} />
            <div>
                <label>
                    <input type="radio" name="completed" value="true" checked={read === true} onChange={handleOptionChange} />
                    Read
                    </label>
                <label>
                    <input type="radio" name="completed" value="false" checked={read === false} onChange={handleOptionChange} />
                    False
                </label>
                <p>You selected: {read ? 'True' : 'False'}</p>
            </div>
            <button type="submit">Add</button>
        </form>
    </Container>
  )
}

export default Add