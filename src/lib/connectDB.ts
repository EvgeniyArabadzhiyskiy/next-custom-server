import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
