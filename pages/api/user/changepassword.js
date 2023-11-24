import mongoose from "mongoose";
import connectionSuja from "@/database/dbconstr";
import User from "@/database/models/User";
import bcrypt from "bcrypt";

export default async (req, res) => {
  let { id, password } = req.body;

  try {
    await connectionSuja();
    const user = await User.findById(id);

    if (password) {
      user.password = password;
    }
    await user.save();
    res
      .status(200)
      .json({ message: "Password has been updated successfully", success: true });
    await mongoose.connection.close();
  } catch (error) {
    console.log("User Post Request Error", error);
    res.status(400).json({ mesg: "Error updating Password", success: false });
  }
};
