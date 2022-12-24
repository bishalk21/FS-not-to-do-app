import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    hours: {
      type: Number,
      required: true,
      max: 186,
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true, // it will create everytime updated and inserted data
  }
);

export default mongoose.model("Task", taskSchema);
