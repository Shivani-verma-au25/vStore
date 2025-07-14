import mongoose from 'mongoose'

export const  connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Databse connecteds successfully: ${connectionInstance.connection.host}`);
        return connectionInstance;
        
    } catch (error) {
        console.log("Databse connection failed:" ,error);
        process.exit(1);
        
    }
}
