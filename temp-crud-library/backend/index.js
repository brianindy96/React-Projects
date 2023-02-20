import express from "express";
// Nodemon helps with restarting application, everytime there is a change
import mysql from "mysql"

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

// Use Express for API request with backend servers 
app.get("/", (req, res)=> {
    res.json("hello this is the backend")
})


app.listen(8800, () => {
    console.log("Connected to Backend!")
});