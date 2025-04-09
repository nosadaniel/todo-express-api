import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Get the MongoDB URI from the environment variable
const MONGO_URI = process.env.MONGO_URI;

export const connectToDatabase = async (): Promise<void> => {
    if (!MONGO_URI) {
        throw new Error('MONGO_URI is not defined in the environment variables');
        return;
    }

    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};


export const disconnectFromDatabase = async (): Promise<void> => {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
};
