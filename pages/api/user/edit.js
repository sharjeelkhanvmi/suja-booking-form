import mongoose from "mongoose";
import connectionSuja from "@/database/dbconstr";
import User from "@/database/models/User";
import bcrypt from "bcrypt";

export default async (req, res) => {
  let { fname, lname, phone, _id, password } = req.body;

  try {
    await connectionSuja();
    const user = await User.findById(_id);
    user.fname = fname;
    user.lname = lname;
    user.phone = phone;
    // Check if the password is provided
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      // Update the hashed password
      user.password = hashedPassword;
    }
    await user.save();
    res
      .status(200)
      .json({ message: "Data has been updated successfully", success: true });
    await mongoose.connection.close();
  } catch (error) {
    console.log("User Post Request Error", error);
    res.status(400).json({ mesg: "Error updating data", success: false });
  }
};
