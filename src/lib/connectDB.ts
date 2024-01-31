import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

// const MONGODB_URL = process.env.MONGODB_URL

// if (!MONGODB_URL) {
//   throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
// }

// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

export const connectDB = async () => {
  // if (cached.conn) {
  //   return cached.conn;
  // }

  // if (!cached.promise) {
  //   const opts = {
  //     bufferCommands: false,
  //   };

  //   cached.promise = mongoose.connect(MONGODB_URL, opts)
  //   .then((mongoose) => {
  //     return mongoose;
  //   });
  // }

  // cached.conn = await cached.promise;
  // return cached.conn;

  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    // console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
