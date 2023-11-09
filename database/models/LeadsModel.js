import mongoose from "mongoose";

const leadsSchema = new mongoose.Schema({
  step1: {
    postalcode: { type: String }
  },
  step2: {
    gear: { type: String },
    driving: { type: String }
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

const leadsModel =
  mongoose.models.Leads || mongoose.model("Leads", leadsSchema);

export { leadsModel };
