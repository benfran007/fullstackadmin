import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: String,
    firstname: String,
    lastname: String,
    email: String,
});

const UserRepo = mongoose.model('User', userSchema, 'Users');
export default UserRepo;
