const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const User = mongoose.model("User", UserSchema)
module.exports = User
