import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { deleteBook, getAllBooks } from "../services/book.service";

const BookLists = ({ getBookId }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])


    // HOW TO ACCESS FIRESTORE DATA
    const getBooks = async () => {
        const data = await getAllBooks();
        setBooks(data.docs.map((doc) => ({
          // all the information this contains: title, author, status
          ...doc.data(),
          // id is not included
          id: doc.id
        })));
    }

    const handleDelete = async (id) => {
      await deleteBook(id);
    }

    console.log(books);


  return (
    <div style={{marginTop: "20px"}}>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => (
            <tr key={doc.id}>
                <td>{index+1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => handleDelete(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
          ))}
              
        </tbody>
      </Table>
    </div>
  )
}

export default BookLists