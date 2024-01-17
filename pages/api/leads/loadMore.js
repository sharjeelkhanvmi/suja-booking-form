import connectionSuja from "@/database/dbconstr";
import Lead from "@/database/models/Lead";

export default async function GET(req, res) {
  let pageNo = req.query.page ? parseInt(req.query.page) : 0;
  let Limit = req.query.limit ? parseInt(req.query.limit) : 5;
  let skip = pageNo * Limit;
  console.log(pageNo, Limit, skip);

  try {
    await connectionSuja();

    const totalCount = await Lead.countDocuments({ del: 0 });

    const leads = await Lead.find({ del: 0 })
      .limit(Limit)
      .skip(skip)
      .sort({ createdAt: -1 })
      .populate("user")
      .exec();

    // Send the response once with all the data
    res.json({
      totalCount,
      totalPages: Math.ceil(totalCount / Limit),
      currentPage: pageNo,
      leads,
    });

    console.log("LEADS INDEX API");
  } catch (error) {
    console.error("Error fetching leads:", error);

    // Handle the error and send an error response
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
