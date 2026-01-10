import Express from 'express'
//import controller
import { handleCreateEmployeeAccount } from '../controller/employee.controller.js';
//import  Middleware";
import handleUserAuth from '../Middleware/useAuth.js';

//Router setup
const EmployeeRouter = Express.Router();

// setup Route
EmployeeRouter.post("/create",handleUserAuth,handleCreateEmployeeAccount)

export default EmployeeRouter