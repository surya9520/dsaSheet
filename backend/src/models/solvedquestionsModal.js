import { mongoose, Schema } from "mongoose";

const solvedquestionsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: "Dsa",
    },
    solution: [
      {
        type: Schema.Types.ObjectId,
        ref: "Userdsa",
      },
    ],
  },
  { timestamps: true }
);

const SolvedQuestions = mongoose.model(
  "SolvedQuestions",
  solvedquestionsSchema
);

export { SolvedQuestions };
