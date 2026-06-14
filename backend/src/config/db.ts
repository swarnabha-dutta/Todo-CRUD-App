import mongoose from "mongoose";

const connectDB = async() : Promise<void>=>{
    try {
        const url  = process.env.MONGO_URI as string;
        await mongoose.connect(url);
        console.log("MongoDB is Connected");
    } catch (error) {
        console.error("MongoDB Connection Failed",error);
        
    }
};

export default connectDB;
