import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      maxlength: 100,
    },
    hours: {
      type: Number,
      required: true,
      max: 184,
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true, // time stamps for createdAt and updatedAt
  }
);

export default mongoose.model("Task", taskSchema);
