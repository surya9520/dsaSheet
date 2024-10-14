import { List } from "../models/listmodel.js";
import { getuser } from "../utils/jwt.js";

//create List 

const createList=async (req,res)=>{
    const token=req.cookies?.uid;
    const {listname}=req.body;
    try{
        if(token){
            const createdBy=getuser(token)._doc._id;
            const list=new List({listname,createdBy});
            await list.save(); 
            res.status(200).json(list);
        }
        else{
            res.status(402).json("login first");
        }
    }catch(error){
        res.status(500).json("internal server error");
}
}

//getlists

const getlists=async(req,res)=>{
    try{
        const listobject=await List.find();
         res.status(200).json(listobject)
    }catch(error){
        res.status(500).json({msg:"internal server error"});
    }
}

export {createList,getlists}