import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type : String,
    required : true
  },
  email: {
    type : String,
    required : true,
    unique : true
  },
  phonenumber: {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  },
  role: {
    type : String,
    required : true,
    enum : ['chemist','distributor','manufacturer'],
  },
},{timestamps:true});

export const User = mongoose.model('User',userSchema)