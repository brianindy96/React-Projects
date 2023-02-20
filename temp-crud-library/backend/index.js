import express from "express";
// Nodemon helps with restarting application, everytime there is a change
const app = express();

app.listen(8800, () => {
    console.log("Connected to Backend!")
});