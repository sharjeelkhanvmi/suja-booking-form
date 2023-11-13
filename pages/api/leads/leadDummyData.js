import connectionSuja from "@/database/dbconstr";
import { leadsModel } from "@/database/models/LeadsModel";
import mongoose from "mongoose";


export default async function GET(req, res) {
   try {
    await connectionSuja();
    let leadData = [];
    for(let i=0; i<1; i++){
        let requestData = {
            "step1":
              {
                "postalcode": "Ahmed"
              },
            "step2":
              {
                "gear": "Automatic",
                "driving": "Experienced"
              },
            "step3":
              {
                "addons": "Ahmed"
              },
            "step4":
              {
                "title": "Mr.",
                "first_name": "Ahmed",
                "last_name": "Doe",
                "email": "john@example.com",
                "confirm_email": "john@example.com",
                "mobile_number": "1234567890",
                "agree": "Yes"
              },
            "step5": 
              {
                "fastcourse": "Advanced JavaScript"
              },
            "step6":
              {
                "couponcode": "SAVE10"
              }
          };          
      let lead =  new leadsModel(requestData);
      leadData.push(lead);
      await lead.save();
    }
    
    res.send(leadData);
   } catch (error) {
        console.log("LeadDummyData: ",error);
   }
  }
  