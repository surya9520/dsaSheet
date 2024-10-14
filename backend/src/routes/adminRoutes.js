import { Router } from "express";
import { getALLUsers, updateUser } from "../controllers/adminControllers.js";

const adminRouter=Router();

//get all users
adminRouter.get('/users',getALLUsers)

//update a user
adminRouter.put('/role',updateUser)

export {adminRouter}; 