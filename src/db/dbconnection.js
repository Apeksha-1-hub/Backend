// import mongoose from "mongoose";
// import dotenv from 'dotenv'
// dotenv.config({})

// mongoose
// .connect(process.env.MONGO_URI)
// .then(() => console.log("connceted to MongoDB"))
// .catch((err) => console.error("Mongo conncetion error:", err));



// import mongoose from "mongoose";

// import dotenv from 'dotenv'

// dotenv.config();
// const MONGO_URI =process.env.MONGO_URI
// const connectDb =()=>{
//    try{
//     if(MONGO_URI){
//         console.log("connection err")
//         return
        
//     }mongoose.connect(MONGO_URI)
//     console.log("database connected successfully!!!!")

//    }catch (error){
//      console.log("some error occur",err)
//    }
// }
// export default connectDb;


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  const mongoURL = process.env.MONGO_URI;

  if (!mongoURL) {
    console.error("MONGODB_URL is not defined in the environment variables.");
    throw new Error("Missing MongoDB URL");
  }

  
    mongoose
      .connect(mongoURL)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB connection error:", err));
  
};

export default connectDB;