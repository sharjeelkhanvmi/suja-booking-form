import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name: { type: String, required: true  , trim : true},

    email: { type: String, required: true, unique: true  , trim : true},

    password: { type: String, required: true , trim : true },

}, { timestamps: true });





const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;