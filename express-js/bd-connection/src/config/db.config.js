import mongoose from "mongoose";

//DB connection
async function DBConnection() {
  try {
    //connection query
    await mongoose
      .connect(process.env.MONGODB_DB_URL)
      .then(() => {
        console.log("DB connected!");
      })
      .catch((error) => {
        if (error) throw new Error("Failed to connect with DB!");
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default DBConnection;
