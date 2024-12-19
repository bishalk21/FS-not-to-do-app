import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conStr = process.env.MONGO_CLIENT;
    mongoose.set("strictQuery", false);

    if (!conStr) {
      console.error("Error connecting to the database");
      return;
    }

    const conn = await mongoose.connect(conStr);
    conn && console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

export default dbConnect;
