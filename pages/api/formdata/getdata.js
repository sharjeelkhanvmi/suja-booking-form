import  connectionSuja  from "@/database/dbconstr";
import { leadData } from "@/database/models/schema";
import mongoose from "mongoose";

export default async function GET(req, res) {
  let data = [];
  try {
    await mongoose.connect(connectionSuja);
    data = await leadData.find();
    res.status(200).json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}