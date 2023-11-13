import connectionSuja from "@/database/dbconstr";
import { leadsModel } from "@/database/models/LeadsModel";
import mongoose from "mongoose";

export default async function GET(req, res) {
  let pageNo = req.query.page ? req.query.page : 0;
  let Limit = req.query.limit ? req.query.limit : 50;
  let skip = pageNo * Limit;
  try {
    await connectionSuja();
    const leads = await leadsModel.find().skip(skip).limit(Limit);
    res.status(200).json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
