const express = require("express")
const app = express()
const mongoose = require('mongoose');
const User = require("./model/User")

const auth_route = require("./route/auth")
const product_route = require("./route/product")

require("./config/database")


app.use("/api", auth_route)
app.use("/api/products", product_route)


// app.get()



app.listen(8000, () => {
    console.log("server started...")
})