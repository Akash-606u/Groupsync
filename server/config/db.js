import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();



const connectDb=async () => {
    try{
         await mongoose.connect(process.env.LOCALMONGODB_URL)
          
         console.log("db connected");
         
    }catch(error){
        console.log("db connection failed");
        
    }
}

export default connectDb