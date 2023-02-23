import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { getAllBooks } from "../services/book.service";

const BookLists = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])


    // HOW TO ACCESS FIRESTORE DATA
    const getBooks = async () => {
        const data = await getAllBooks();
        setBooks(data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        })));
    }

    console.log(books);


  return (
    <div style={{marginTop: "20px"}}>
      <div className="mb-2">
        <Button variant="dark edit">
          Refresh List
        </Button>
      </div>

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
            <tr>
                <td>{index+1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onCli
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