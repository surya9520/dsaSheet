import { AdminRemark } from "../models/adminRemarkModel.js";
import { getuser } from "../utils/jwt.js";

//to post remark
const postRemark = async (req, res) => {
  const token = req.cookies?.uid;
  const { remark, solutionId, userId } = req.body;
  console.log(req.body);
  try {
    if (token) {
      const mentor = getuser(token);
      const mentorId = mentor._doc._id;
      const adminRemark = new AdminRemark({
        remark,
        mentorId,
        solutionId,
        userId,
      });
      await adminRemark.save();
      res.status(200).json({ msg: "remark send successfully" });
    } else {
      res.status(402).json({ msg: "first login" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "internal server error" });
  }
};

//to get remark
const getRemark = async (req, res) => {
  const solutionId = req.headers?.sid;
  try {
    const review = await AdminRemark.findOne({ solutionId });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

//FOR UPDATE A SOLUTION
const updateRemark = async (req, res) => {
  const token = req.cookies?.uid;
  let { solutionId, remark } = req.body;
  console.log(solutionId,remark)
  try {
    if (token) {
      const mentor = getuser(token);
      const mentorId = mentor._doc._id;
      console.log("solutionid: ", solutionId);
      let updatedRemark = await AdminRemark.findOneAndUpdate(
        { solutionId },  
        {
          $set: {
            mentorId,
            remark,
          },
        },
        { new: true } 
      );
      
      if (!updatedRemark) { 
        console.log(mentorId)
        return res.status(404).json({ message: "Solution not found" });
      }
      res.status(200).json({
        msg: "Remark updated successfully",
      });
    } else {
      res.status(402).json({ msg: "please login first" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export { postRemark, getRemark, updateRemark };
