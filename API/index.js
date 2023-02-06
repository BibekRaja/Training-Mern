const express = require("express")
const app = express()
const mongoose = require('mongoose');

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/mangsir')
    .then(() => console.log('Connected!'));
// app.get()

app.post("/api/signup", (req, res) => {
    res.send("signup user...")
})

app.listen(8000, () => {
    console.log("server started...")
})