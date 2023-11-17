import connectionSuja from "@/database/dbconstr";
import User from "@/database/models/User";
import Lead from "@/database/models/Lead";
import mongoose from "mongoose";
import jwtDecode from "jwt-decode";
import { ObjectId } from "mongodb";

export default async function GET(req, res) {
  const { cookies } = req;
  const token = cookies.token;
  const decoded = jwtDecode(token);
  const userId = decoded.id;
  const objectId = new ObjectId(userId);

  try {
    await connectionSuja();
    // Fetch users
    const users = await User.find().exec();
    // Fetch leads for each user
    const leadsPromises = users.map(async user => {
      const leads = await Lead.find({ user: objectId }).exec();
      return { user, leads };
    });
    // Wait for all lead queries to complete
    const usersWithLeads = await Promise.all(leadsPromises);
    res.status(200).json(usersWithLeads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

