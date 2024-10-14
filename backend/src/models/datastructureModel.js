import { Schema, model } from "mongoose";

const dataStructureTagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Each tag should be unique
      trim: true, // Removes leading/trailing whitespace
    },
    description: {
      type: String,
      required: false, // Optional description for the tag
      trim: true,
    }, 
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

const DataStructureTag = model("DataStructureTag", dataStructureTagSchema);
export default DataStructureTag;
