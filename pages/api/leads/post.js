import connectionSuja from "@/database/dbconstr";
import Lead from "@/database/models/Lead";
import mongoose from "mongoose";

export default async function POST(req, res) {
  await connectionSuja();
  const requestData = req.body;
  // res.status(200).send(requestData)
  try {
    const newLead = await new Lead(requestData);
    await newLead.save();
    res.status(200).json(newLead);
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
