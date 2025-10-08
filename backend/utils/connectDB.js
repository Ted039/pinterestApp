import dotenv from 'dotenv'
import mongoose from 'mongoose';


dotenv.config();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoBD connected successfully");
        
    } catch (error) {
        console.log("MongoDb connection failure", error);
        
    }
}

export default connectDB
