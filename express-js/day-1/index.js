import Express from "express";

//import router
import EmployeeRouter from "./src/router/employeeRoute.js";

// app setup
const App = Express();

//App middleware
App.use(Express.json());

// //App router
App.use("/api/employee", EmployeeRouter);

// Initial-Route
// App.use("/", (req, res) => {
//   res.json({ message: "Server running.." });
// });

//server listen
const PORT = 3000;
App.listen(PORT, () => {
  console.log("server Running..");
});
