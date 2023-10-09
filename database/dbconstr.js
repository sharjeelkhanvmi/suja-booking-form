import mongoose from "mongoose";
const connectionSuja = async () => {
    const connectionUrl = process.env.DBURL;
    console.log('Danish',connectionUrl)
    mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default connectionSuja;