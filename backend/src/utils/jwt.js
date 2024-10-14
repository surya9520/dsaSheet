import jwt from "jsonwebtoken";
const secret_key='suryajoshi617@'


const setuser=(user)=>{
    try{
      const uid=jwt.sign({...user},secret_key);
      console.log(uid)
      return uid
    }catch(error){
        console.log(error);
    }
}

const getuser=(token)=>{
    try{
        const user=jwt.verify(token,secret_key);
        return user
    }catch(error){
        console.log(error)
    }
    
}

export {setuser,getuser}