import { hash,compare,genSalt } from "bcrypt";

const hashPassword=async(password)=>{
    try{
        let salt=await genSalt(10);
        let hashedPassword=await hash(password,salt);
        return hashedPassword;
    }catch(error){
        console.log(error)
    }
}

const comparePassword=async(password,hashedPassword)=>{
    return await compare(password,hashedPassword)
}

export {hashPassword,comparePassword}