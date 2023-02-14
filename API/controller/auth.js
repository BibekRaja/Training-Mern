
const User = require("../model/User")

const signup = (req, res) => {
    User.create({
        name: "abcde",
        email: "abced@bbba.com"

    })

    res.send("signup user...")
}
const login = (req, res) => {
    User.find()

    res.send("login user...")
}

module.exports = {
    signup,
    login
}