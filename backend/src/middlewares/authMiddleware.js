import { User } from "../models/usermodel.js";
import { getuser } from "../utils/jwt.js";

const verifiedUser = async (req, res, next) => {
  let uid = req.cookies?.uid;
  try {
    if (uid) {
      let user = getuser(`${uid}`);
      console.log(user)
      if (user) {
        user = await User.findById(user._doc._id); 
        if (user) {
          req.user = user; 
          return next();
        } else {
          return res.status(400).json({ msg: "wrong token" });
        }
      } else {
        return res.status(400).json({ msg: "invalid token" });
      }
    } else {
      return res.status(401).json({ msg: "login first" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "internal server errorrrrrrrr" });
  }
};

export { verifiedUser };
