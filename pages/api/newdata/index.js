import { connectionSuja } from "@/database/dbconstr";
import { leadData } from "@/database/models/schema";
import mongoose from "mongoose";

export default async function handler(req, res) {
    let data = [];
  try {
    await mongoose.connect(connectionSuja);
    data = await leadData.find()
    
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  res.status(500).json({ result: data });
  
}

export async function POST(){
    await mongoose.connect(connectionSuja);
    let data = new data({
        fname:"US",
        lname:"Shah",
        company:"New Company",
        position:"New Position",
        year:"2024"
    })
    const result = await data.save();
    return response.json({result,success:true})
}