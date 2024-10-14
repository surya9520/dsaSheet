import DifficultyTag from "../models/complexityModel.js";
import DataStructureTag from "../models/datastructureModel.js";
import CompanyTag from "../models/companyModel.js";
import PlatformTag from "../models/platformModel.js";

//create complexity
const createComplexity=async(req,res)=>{
    const{level}=req.body;
    try{
      const difficulty=new DifficultyTag({level});
      await difficulty.save();
      res.status(200).json(difficulty)
    }catch(error){
      res.status(200).json({msg:"internal sever errorr",error})
    }
}

//get complexity
const getComplexity=async (req,res)=>{
    try{
        const complexityTags=await DifficultyTag.find();
        res.status(200).json(complexityTags);
    }catch(error){
        res.status(500).json(error);
    }

}

//create datastructure
const createDs=async(req,res)=>{
    const {name}=req.body
    try{
     const datastructure=new DataStructureTag({name});
     await datastructure.save();
     res.status(200).json(datastructure)
    }catch(error){
        res.status(500).json({msg:"internal server error"})
    }
}

//get datastructure
const getDS=async(req,res)=>{
    try{
        const datastructures=await DataStructureTag.find();
        res.status(200).json(datastructures)
    }catch(error){
        res.status(500).json({msg:"internal sever error"})
    }
   
}

//create company
const createCompany=async(req,res)=>{
    const {company}=req.body
    try{
     const companys=new CompanyTag({name:company});
     await companys.save();
     res.status(200).json(companys)
    }catch(error){
        console.log(error)
        res.status(500).json({msg:"internal server error"})
    }
}

//get company
const getCompany=async(req,res)=>{
    try{
        const company=await CompanyTag.find();
        res.status(200).json(company)
    }catch(error){
        res.status(500).json({msg:"internal sever error"})
    }    
    
}

//create platform
const createPlatform=async(req,res)=>{
    const {name}=req.body
    try{
     const platform=new PlatformTag({name});
     await platform.save();
     res.status(200).json(platform)
    }catch(error){
        res.status(500).json({msg:"internal server error"})
    }
}

//get platform
const getPlatform=async(req,res)=>{
    try{
        const platform=await PlatformTag.find();
        res.status(200).json(platform)
    }catch(error){
        res.status(500).json({msg:"internal sever error"})
    }    
    
}

export{createComplexity,getComplexity,createDs,getDS,createCompany,getCompany,createPlatform,getPlatform}