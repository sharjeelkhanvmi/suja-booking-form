import mongoose from "mongoose";
import connectionSuja from "@/database/dbconstr";
import User from "@/database/models/User";
import bcrypt from "bcrypt";

export default async (req, res) => {
  let { fname, lname, phone, _id } = req.body;

  try {
    await connectionSuja();
    const user = await User.findById(_id);
    user.fname = fname;
    user.lname = lname;
    user.phone = phone;
    await user.save();
    res.status(200).json({ message: "Data Has been Added to the Database" });
    await mongoose.connection.close();
  } catch (error) {
    console.log("User Post Request Error", error);
    res.status(400).json({ mesg: "ERRRRRORRRRRR" });
  }
};
