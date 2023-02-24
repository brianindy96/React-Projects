import React from 'react'
import { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import { addBooks, getBook, updateBooks } from '../services/book.service';

const AddBook = ({ id, setBookId }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [msg, setMsg] = useState({error: false, msg: ""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const newBook = {
                title,
                author,
                status,
            }

            try{
                await addBooks(newBook);
                setMsg({ error: false, msg: "New Book added"})
            } catch(error){
                setMsg({ error: true, msg: error.message})
            }
            

            setTitle('');
            setAuthor('');

        } catch(error) {
            if(title === "" || author === ""){
                setMsg({error: true, msg: "All fields are mandatory!"})
            }
        }
    };

    console.log(title);


    const editHandler = async () => {
        setMsg("");
        try{
            const docSnap = await getBook(id);
            setTitle(docSnap.data().title);
            setAuthor(docSnap.data().author);
            setStatus(docSnap.data().status);
        } catch(err){
            setMsg({error: true, msg: err.message})
        }
    }



    // UseEffect
    useEffect(() => {
        console.log("The id here is : ", id);
        if (id !== undefined && id !== "") {
          editHandler();
        }
      }, [id]);


  return (
    <>
    <div style={{marginTop: "30px"}}>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
    </div>
    </>
  )
}

export default AddBook