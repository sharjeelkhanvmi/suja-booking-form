import connectionSuja from "@/database/dbconstr";
import User from "@/database/models/User";
import mongoose from "mongoose";

export default async function GET(req, res) {
  try {
    await connectionSuja();
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
