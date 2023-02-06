const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

module.export = 