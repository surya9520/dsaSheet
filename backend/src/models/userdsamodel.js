import { mongoose,Schema } from "mongoose";
import { type } from "os";

const userDsaSchema=new Schema({
    approachName:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Dsa',
        required: true,
    },
    solutionCode:{
        type:String,
        required:true
    },
    language: {
        type: String,
        required: true,
        enum: ['JavaScript', 'Python', 'C++', 'Java'], // Programming language used for the solution
    },

})

const Userdsa=mongoose.model('Userdsa',userDsaSchema);

export {Userdsa} 