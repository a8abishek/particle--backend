import Express from "express";
import dotenv from "dotenv";

//import 
import DBConnection from "./src/config/db.config.js";

// App setup
const app = Express();

//Middleware
app.use(Express.json());

//env load
dotenv.config({ path: "./.env.local" });

//DB connection 
DBConnection()

//server listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running... on http://localhost:${PORT}`);
});
