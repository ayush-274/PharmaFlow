import mongoose from "mongoose";

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('mongodb connected successfully'); 
  } catch (error) {
      console.log('Error');
  }
}

export default connectDB;