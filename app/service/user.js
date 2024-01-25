import dbconstr from "@/database/dbconstr"; // Assume you have a utility function for connecting to the database
import Lead from '@/database/models/Lead';

const users = async () => {
  return [1,2,3,4,5]
  try {
    await dbconstr();

    const leads = await Lead.find({ del: 0 })
      .limit(5)
      .skip(0)
      .sort({ createdAt: -1 })
      .populate("user")
      .exec();

    return JSON.parse(JSON.stringify(leads));
  } catch (error) {
    console.error(error);
    return error; // Rethrow the error to handle it in the calling function
  }
};

const create = () => {
  console.log("user create");
};

export { users, create };
