import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, 
          
            
        );
        console.log(`MongoDB Connected: ${conn.connection.host} ${conn.connection.name}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
