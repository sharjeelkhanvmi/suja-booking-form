import connectionSuja from "@/database/dbconstr";
import Lead from "@/database/models/Lead";

export default async function POST(req, res) {
  await connectionSuja();
  const requestData = req.body;

  try {
    // Use your custom random number as _id
    const randomNumber = Math.floor(Math.random() * 10000) + 2;
    requestData._id = randomNumber;

    const newLead = await new Lead(requestData);
    await newLead.save();
    res.status(200).json(newLead);
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
