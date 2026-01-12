import mongoose from "mongoose";

//connection setup

async function DBConnection() {
  try {
    await mongoose
      .connect(process.env.MONGODB_CONNECTION_URL)
      .then(() => {
        console.log("connected DB!");
      })
      .catch(() => {
        throw new Error("faild to connecting with DB");
      });
  } catch (error) {
    console.log(error);
  }
}

export default DBConnection;
