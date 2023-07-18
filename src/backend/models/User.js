import mongoose, { Schema, Types } from "mongoose";


const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    todos: [{
        type: Types.ObjectId,
        ref: 'Todo',
    }]
});



const User = mongoose.model('User', schema);

export { User };