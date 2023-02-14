
const express = require('express');
const router = express.Router();
const Product = require("../model/Product")

router.get("/", (req, res) => {
    res.send("product")
})
router.post("/", (req, res) => {
    Product.create({
        product_name: "apple",
        price: 100
    })

    res.send("create product")
})

module.exports = router