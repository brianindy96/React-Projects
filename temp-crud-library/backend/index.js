import express from "express";
// Nodemon helps with restarting application, everytime there is a change
import mysql from "mysql"
import cors from "cors";

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const password = process.env.PASSWORD


const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: password,
    database: "test",
})

// BY DEFAULT EXPRESS DOES NOT ALLOW JSON FILES TO POST ELSEWHERE
// This function allows other clients to send JSON files to EXPRESS
app.use(express.json());

// CORS
app.use(cors());

// Use Express for API request with backend servers 
// GET = READ
app.get("/", (req, res)=> {
    res.json("hello this is the backend")
})

app.get("/books", (req, res)=> {
    const q = "SELECT * FROM books"
    
    db.query(q,(err,data) => {
        if(err){
            return res.json(err);
        } 
        return res.json(data);
        
    });
})

// Book details POST (add book to Library)
app.post("/books", (req,res) => {
    const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)";
    
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        ];
    
    db.query(q, [values], (err,data) => {
        if(err) {
            return res.json(err);
        }  

        return res.json("Book posted");
})})

// DELETE

app.delete("/books:id", (req,res) => {
    const bookId = req.params.id;

    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId], (err,data) => {
        if(err) {
            return res.json(err);
        }  

        return res.json("Book deleted");
})
})

// put method to UPDATE

app.put("/books/:id", (req,res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `description` = ?, `cover` = ? WHERE id = ?"

    const values =[
        req.body.title,
        req.body.description,
        req.body.cover,
    ]

    db.query(q, [...values, bookId], (err,data) => {
        if(err) {
            return res.json(err);
        }  

        return res.json("Book updated");
})

})


app.listen(8800, () => {
    console.log("Connected to Backend!")
});