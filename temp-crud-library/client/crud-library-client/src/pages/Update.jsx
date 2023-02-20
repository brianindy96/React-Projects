import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {

    const [book, setBook] = useState({
        title: "",
        description: "",
        cover: ""
    });

    const navigate = useNavigate();
    // OR CAN USE USEPARAMS() here to get id
    const location = useLocation();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try{
            await axios.put(`http://localhost:8800/books/${bookId}`, book)
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div className='form'>
        <h1>Update the book</h1>
        <input type="text" placeholder='title' name="title" onChange={handleChange} />
        <input type="text" placeholder='description' name="description" onChange={handleChange} />
        <input type="text" placeholder='cover' name="cover" onChange={handleChange} />
        <button onClick={handleSubmit}>Update</button>
    </div>
  )
}

export default Update