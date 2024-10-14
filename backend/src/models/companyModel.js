import { Schema, model } from 'mongoose';

const companyTagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Each company name should be unique
    trim: true
  },
  description: {
    type: String,
    required: false, // Optional description of the company
    trim: true
  }
}, { timestamps: true });

const CompanyTag = model('CompanyTag', companyTagSchema);
export default CompanyTag;