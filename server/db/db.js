import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const mongoURI = process.env.MONGODB;

const connectDatabase = async () => {
  try {
    const connected = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "InventoryManagement",
    });
    if (connected) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDatabase;
