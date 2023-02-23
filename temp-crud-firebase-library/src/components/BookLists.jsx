import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const BookLists = () => {
    const [books, setBooks] = useState([]);

  return (
    <div style={{marginTop: "20px"}}>
      <div className="mb-2">
        <Button variant="dark edit">
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
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
              <tr>
                <td>Num</td>
                <td>Title</td>
                <td>Author</td>
                <td>Status</td>
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
                  >
                    Delete
                  </Button>
                </td>
              </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default BookLists