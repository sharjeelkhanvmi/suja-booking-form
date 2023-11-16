import connectionSuja from "@/database/dbconstr";
import User from "@/database/models/User";
import Lead from "@/database/models/Lead";
import mongoose from "mongoose";

export default async function GET(req, res) {
  try {
    
    await connectionSuja();

    // Fetch users
    const users = await User.find().exec();

    // Fetch leads for each user
    const leadsPromises = users.map(async (user) => {
        const leads = await Lead.find({ user: user._id }).exec();
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
