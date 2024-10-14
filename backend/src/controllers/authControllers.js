import { User } from "../models/usermodel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { setuser } from "../utils/jwt.js";

//register a user

const registerUser = async (req, res) => {
  const { firstname,lastname,phone, email, password } = req.body;
  try {
    let user = await User.findOne({ $or: [{ email }, { phone }] });
    if (user) {
      res.status(400).json({ msg: "user already exist" });
    } else {
      user = new User({ firstname,lastname,phone, email, password: await hashPassword(password) });
      await user.save();
      console.log(user)
      let token = setuser(user); 
      res.cookie("uid", token);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({msg:"internal server error",error:error})
  }
};

//login a user

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      if (await comparePassword(password, user.password)) { 
        let token = setuser(user);
        console.log(token);
        res.cookie("uid", token, {
          httpOnly: true,
          sameSite: "Lax", // or 'Strict'
          secure: false, // Set this to `false` on localhost to allow cookies on HTTP
          path: "/",
        });
        
        res.status(200).json(user);
      } else { 
        res.status(400).json({ msg: "invalid credntials" }); 
      }
    } else {
      res.status(404).json({ msg: "user is not registered" });
    }
  } catch (error) {
    console.log(error);
  }
}; 

export {registerUser,loginUser}