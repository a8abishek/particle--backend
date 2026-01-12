import Express from "express";
import dotenv from "dotenv";

//import
import DBConnection from "./src/config/db.config.js";
import userRouter from "./src/routers/userRoute.js";
//App setup
const App = Express();

// App Middleware
App.use(Express.json());

// App router
App.use("/user/api", userRouter);

//env load
dotenv.config({ path: "./.env.local" });

//connection with Db
DBConnection();

//server listen
const PORT = process.env.PORT || 5000;
App.listen(PORT, () => {
  console.log(`server Running... on http://localhost:${PORT}`);
});
