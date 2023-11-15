import connectionSuja from "@/database/dbconstr";
import Lead from "@/database/models/Lead";

export default async function GET(req, res) {
  let pageNo = req.query.page ? parseInt(req.query.page) : 0;
  let limit = req.query.limit ? parseInt(req.query.limit) : 10;
  let skip = pageNo * limit;

  try {
    await connectionSuja();

    // Assuming you have a 'role' field in your User model
    const leads = await Lead.findOne()
      .populate({
        path: 'user',
        match: { role: 'admin' }, // Filter by role
        select: 'role', // Select only necessary fields
      })
      .limit(limit)
      .skip(skip);
    res.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
