import connectionSuja from "@/database/dbconstr";
import { leadsModel } from "@/database/models/LeadsModel";
import mongoose from "mongoose";

export default async function POST(req, res) {
  await connectionSuja();
  const requestData = req.body;
  try {
    const newLead = await new leadsModel(requestData);
    await newLead.save();
    console.log("Lead saved successfully");
    res.status(201).json({ success: true, message: "Lead added successfully" });
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
