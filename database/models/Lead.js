import mongoose from "mongoose";

const leadsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  step1: {
    postalcode: { type: String }
  },
  step2: {
    gear: { type: String },
    driving: { type: String },
    hours: { type: String }
  },
  step3: {
    addons: { type: String }
  },
  step4: {
    title: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    confirm_email: { type: String },
    mobile_number: { type: String },
    agree: { type: String }
  },
  step5: {
    fastcourse: { type: String }
  },
  step6: {
    couponcode: { type: String }
  }
});

const Lead = mongoose.models.Lead || mongoose.model("Lead", leadsSchema);

export default Lead;
