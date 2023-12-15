import connectionSuja from "@/database/dbconstr";
import Lead from "@/database/models/Lead";
import crypto from 'crypto';

export default async function POST(req, res) {
  await connectionSuja();
  const requestData = req.body;

  try {
    // Generate a crypto-based unique id
    const uniqueId = crypto.randomBytes(2).toString('hex').toUpperCase();
    requestData._id = uniqueId;

    const newLead = await new Lead(requestData);
    await newLead.save();
    res.status(200).json(newLead);
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
