import connectionSuja from "@/database/dbconstr";
import Lead from "@/database/models/Lead";
import mongoose from "mongoose";

export default async function POST(req, res) {
  await connectionSuja();
  const requestData = req.body;

  try {
    const newLead = await new Lead(requestData);
    await newLead.save();
    console.log("Lead saved successfully");
    res.status(201).json({ success: true, message: "Lead added successfully", newLead });
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
