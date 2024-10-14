import { Router } from "express";
import { createList, getlists } from "../controllers/listControllers.js";

const listTagRouter=Router();

listTagRouter.post("/createlist",createList)
listTagRouter.get("/getlists",getlists)

export {listTagRouter}