import { model, Schema, } from "mongoose";

const listSchema=new Schema({
    listname: {
        type: String,
        required: true
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
      },
      mixedField: {
        type: Schema.Types.Mixed,
        required: false
      }
    
});

const List=model('List',listSchema);
export {List}