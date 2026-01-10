import { employeeCollection } from "./../models/employee.js";

// 1.Create Account

export const handleCreateEmployeeAccount = (req, res) => {
  const employeeDate = req.body;

  try {
    // validation
    if (
      !employeeDate.name ||
      !employeeDate.email ||
      !employeeDate.password ||
      !employeeDate.role
    ) {
      return res.status(404).json({ message: "All field are require !" });
    }
    //start - Create Account
    if (!employeeCollection) {
      return { message: "No employeeCollection found !" };
    }
    employeeCollection.push(employeeDate);

    //response to client
    res.json({
      message: "employee create succes..",
      employees: employeeCollection[employeeCollection.indexOf(employeeDate)],
    });
  } catch (error) {
    console.log(error);
  }
};
