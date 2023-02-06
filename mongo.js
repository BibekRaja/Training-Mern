/*

show dbs //shows database

use <database_name> // create and switch

db.createCollection("<collection_name") //create collections , eg users

*/

db.users.insertOne({
    name: "shyam",
    email: "shyam@s.com"
})

db.users.insertMany([
    {
        name: "Hari"
    },
    {
        name: "John"
    }
])

db.users.find({ email: "ram@r.com" }, { name: 1 }) // filter options

db.users.updateOne({ name: "John" }, { $set: { age: 20 } }) // update

unset // remove update 

db.users.deleteOne(()) //delete data