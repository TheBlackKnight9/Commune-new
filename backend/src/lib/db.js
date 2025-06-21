import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://prerakcharan:1LiNJV0cyYkJdWTx@cluster0.ghtnznf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error in connecting to MongoDB ${error}`);
        process.exit(1); // Exit the process with failure
    }
}    