import { Router } from "express"
import { loginUser, registerUser } from "../controllers/authControllers.js";

const userRouter=Router();

userRouter.post('/signup',registerUser)
userRouter.post('/login',loginUser)

export{userRouter}