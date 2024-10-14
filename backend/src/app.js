import express from "express";
import { userRouter } from "./routes/usersRoutes.js";
import { dsaRouter } from "./routes/dsaRoutes.js";
import { adminRouter } from "./routes/adminRoutes.js";
import cookieParser from "cookie-parser";
import { verifiedUser } from "./middlewares/authMiddleware.js";
import { solutionRouter } from "./routes/solutionRoutes.js";
import cors from 'cors'
import { adminRemarkRouter } from "./routes/adminRemark.js";
import { listTagRouter } from "./routes/ListsTags.js";
import { addRouter } from "./routes/addRouter.js";


const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow cookies to be sent
  }))
app.use('/api',verifiedUser)

//routes for user
app.use('/users',userRouter)

//routes for dsaproblems
app.use('/api/dsa',dsaRouter)

//routes for admin   
app.use('/api/admin',adminRouter)

//routes for solution
app.use('/api/solution',solutionRouter)

//routes for remark
app.use('/api/remark',adminRemarkRouter)

//lists and tags
app.use('/api/create',listTagRouter)

app.use('/api/add',addRouter)
app.get('/api',(req,res)=>{
    res.status(200).json({msg:"hi user"}) 
})

export { app };
 