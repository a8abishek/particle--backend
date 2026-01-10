//import models
import { users } from "../models/user.js";

//Authenticate
const handleUserAuth = (req, res, next) => {
  const userDetail = req.body;
  try {
    console.log("Middleware Running...");

    //check permission
    const isMatch = users.find(
      (u) => u.role.toLocaleLowerCase() === userDetail.role.toLocaleLowerCase()
    );

    if (!isMatch) {
      throw new Error("Unauthorized user. Contact admin");
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
};

export default handleUserAuth;