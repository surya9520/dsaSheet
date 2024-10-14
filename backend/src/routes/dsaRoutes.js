import { Router } from "express";
import { addDsaProblem, getAllProblems, getSolvedProblems } from "../controllers/dsaControllers.js";


const dsaRouter = Router();

dsaRouter.post("/", addDsaProblem);
dsaRouter.get("/", getAllProblems);
dsaRouter.get("/solvedProblems",getSolvedProblems)


export {dsaRouter}   