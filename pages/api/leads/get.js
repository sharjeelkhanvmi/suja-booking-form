import connectionSuja from "@/database/dbconstr";
import { leadsModel } from "@/database/models/LeadsModel";
import mongoose from "mongoose";

export default async function GET(req, res) {
  try {
    await connectionSuja();
    const leads = await leadsModel.find().lean();
    res.status(200).json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}


