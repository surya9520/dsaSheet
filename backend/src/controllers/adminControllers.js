import { User } from "../models/usermodel.js";
import { getuser } from "../utils/jwt.js";

//get all users
const getALLUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (users) {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

//update a user

const updateUser = async (req, res) => {
  let user_Id = req.headers.user_id;
  let newRole = req.headers.role;
  console.log(user_Id,newRole) 
  try {
    await User.updateOne({ _id: user_Id }, { role: newRole });
    res.status(200).json({ msg: "data updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

export { getALLUsers, updateUser };  