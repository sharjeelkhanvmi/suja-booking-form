import connectionSuja from "@/database/dbconstr";
import Lead from "@/database/models/Lead";

export default async function handler(req, res) {
  await connectionSuja();
  const { query: { id }, method, body } = req;

  try {
    switch (method) {
      case "PUT":
        // Update the lead in the database
        const updatedLead = await Lead.findByIdAndUpdate(id, body, {
          new: true
        });

        if (!updatedLead) {
          return res.status(404).json({ success: false, error: "Lead not found" });
        }

        // Respond with the updated lead
        res.status(200).json({ success: true, data: updatedLead });
        break;

      default:
        res.setHeader("Allow", ["PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error updating lead:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
