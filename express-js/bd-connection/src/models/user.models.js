import mongoose from "mongoose";

//schema
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

//user model
const userModel = mongoose.model("user", userSchema);

export default userModel