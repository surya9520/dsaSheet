import { Router } from "express";
import { createCompany, createComplexity, createDs, createPlatform, getCompany, getComplexity, getDS, getPlatform } from "../controllers/addControllers.js";

const addRouter=Router();

addRouter.post('/createComplexity',createComplexity)
addRouter.get('/getComplexity',getComplexity)
addRouter.post('/createDatastructure',createDs)
addRouter.get('/getDataStructure',getDS)
addRouter.post('/createCompany',createCompany)
addRouter.get('/getCompany',getCompany)
addRouter.post('/createPlatform',createPlatform)
addRouter.get('/getPlatform',getPlatform)

export {addRouter}