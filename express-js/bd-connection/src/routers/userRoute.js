import Express from "express";
import userModel from "../models/user.models.js";

//Setup router
const userRouter = Express.Router();

//setup route

//1.Create Account
userRouter.post("/create-account", (req, res) => {
  const userData = req.body || {};
  try {
    const response = userModel.create(userData);
    res.json(response);
  } catch (error) {
    console.log("error");
  }
});

export default userRouter