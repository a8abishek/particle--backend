import Express from "express";

//Setup router
const UserRouter = Express.Router();

//setup route

// initial-router
UserRouter.get("/", (req, res) => {
  res.json({ message: "Server Running.." });
});

// 1.Create-account(POST)
UserRouter.post("/create-account", (req, res) => {
  res.status(202).json({ message: "Create Account..", AccountInfo: req.body });
});

// 2.Update-profile
UserRouter.put("/Update-profile", (req, res) => {
  res.json({ message: "update profile ..." });
});

// 3.Forgot password
UserRouter.patch("/forgot-password", (req, res) => {
  res.json({ message: "Change the password...." });
});

//4.Delete Account
UserRouter.delete("/delete-account", (req, res) => {
  res.json({ message: "Account delete sucessfully..." });
});

//express
export default UserRouter;
