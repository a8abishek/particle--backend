import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  employeename: String,
  role: String,
  email: String,
  employeeID: Number,
});

const employeeModel = mongoose.model("employee", employeeSchema);

export default employeeModel;
