import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    // const MONGO_CLIENT = "mongodb://localhost:27017/my_not_to_do";
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    conn && console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
