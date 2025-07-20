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

  try {
    await mongoose.connect(mongoURL);
    console.log("Successfully connected to MongoDB.");
  } catch (err) {
    console.error(`Could not connect to MongoDB: ${err.message}`);
    throw err;
  }
};

export default connectDB;

