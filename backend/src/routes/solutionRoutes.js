import { Router } from "express"
import { getSolution, getSpecifSolution, submitSolution, updateSolution } from "../controllers/userdsamodel.js";


const solutionRouter=Router();

solutionRouter.post('/',submitSolution)
solutionRouter.get('/',getSolution)
solutionRouter.get('/specific',getSpecifSolution)
solutionRouter.put('/specific',updateSolution)


export{solutionRouter}    