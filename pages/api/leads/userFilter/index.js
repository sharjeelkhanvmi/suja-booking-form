const { default: connectionSuja } = require("@/database/dbconstr");
const { default: Lead } = require("@/database/models/Lead");

export default async function POST(req, res) {
  const { orderId } = req.body;
  try {
   
    await connectionSuja();
    // Check if orderId is provided
    if (!orderId ) {
       
      return res.status(200).json({ error: "orderId is required" });
    
    }
    const result = await Lead.findById({ _id: orderId });
    // Check if order with the given orderId exists
    if (!result) {
       return res.status(400).json({ error: "Order not found" });
  
    }
    
    // Send the data in the response
    res.status(200).json({ filterData: result });
  } catch (error) {
    console.error("Error in userFilter Index Api", error);

    // Send a generic error response for internal server errors
    res.status(500).json({ error: "Internal Server Error" });
  }
}
