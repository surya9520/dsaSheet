import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "intern", "manager", "admin", "employee"],
      default: "student",
    },
  },
  { timestamp: true }
);

const User = mongoose.model("user", userSchema);

export { User };
