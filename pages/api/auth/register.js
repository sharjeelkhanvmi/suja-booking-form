import connectionSuja from "@/database/dbconstr"; 
import User from "@/database/models/User";
import Joi from "joi";
import bcrypt from "bcrypt";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});



export default async (req, res) => {

    await connectionSuja();

    const { name, email, password } = req.body;

    const { error } = schema.validate({ name, email, password });

    if (error) {

        return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') })

    }

    try {

        // const findUser = await User.findOne({ email }).maxTimeMS(20000);

        // if (findUser) {
        //     return res.status(401).json({ success: false, message: "Email already exists , Please Login" })
        // }


        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);


        const user = await User.create({ name, email, password : hashPassword });

        if (user) {
            return res.status(200).json({ success: true, message: "Account created successfully" })
        }

    }
    catch (error) 
    {

        console.log("Error in register_user (server) => ", error);

        res.status(500).json({ success: false, message: "Something went wrong" })

    }
}