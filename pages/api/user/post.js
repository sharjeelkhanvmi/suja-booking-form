import mongoose from "mongoose";
import connectionSuja from "@/database/dbconstr";
import User from "@/database/models/User";

export default async (req, res) => {
  const { fname, lname, phone, role, email, password } = req.body;
  try {
    await connectionSuja();
    const userModel = new User({ fname, lname, phone, role, email, password });
    await userModel.save();
    res.status(200).json({ message: "Data Has been Added to the Database" });
    await mongoose.connection.close();
  } catch (error) {
    console.log("User Post Request Error", error);
  }
};
