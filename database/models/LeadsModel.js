import mongoose from "mongoose";
import User from "./User";

const leadsSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
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

leadsSchema.methods.getUser = async function() {
  try {
    const user = await Promise.all(this.user.map(userId => User.findById(userId)));
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

const leadsModel = mongoose.models.Leads || mongoose.model("Leads", leadsSchema);

export { leadsModel };
