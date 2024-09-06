import mongoose from "mongoose";

// Define the schema for the ChemistUser
const ChemistUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "chemist", // Set default role as 'chemist'
  },
  password: {
    type: String,
    required: true,
  },
  shopAddress: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the model from the schema and export it
const ChemistUser = mongoose.model("ChemistUser", ChemistUserSchema);

export default ChemistUser;
