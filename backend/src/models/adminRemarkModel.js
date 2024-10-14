import { model,Schema } from "mongoose";

const adminRemarkSchema = new Schema(
  {
    solutionId: {
      type: Schema.Types.ObjectId,
      ref: "userdsa",
      required: true,
    },
    mentorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    remark: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const AdminRemark = model("adminRemark", adminRemarkSchema);


