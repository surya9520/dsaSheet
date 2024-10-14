import { Router } from "express";
import { getRemark,postRemark, updateRemark } from "../controllers/adminRemarkControllers.js";

const adminRemarkRouter=Router();

adminRemarkRouter.post('/',postRemark);
adminRemarkRouter.get('/',getRemark);
adminRemarkRouter.put('/update',updateRemark)

export {adminRemarkRouter}  