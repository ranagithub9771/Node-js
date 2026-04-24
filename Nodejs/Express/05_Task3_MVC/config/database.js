import mongoose, { mongo } from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected ✅");
  } catch (err) {
    console.log("Database connection failed ❌");
    process.exit(1)
  }
}
