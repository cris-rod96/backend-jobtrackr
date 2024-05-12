import mongoose from "mongoose";
const { connect, connection } = mongoose;
import { MONGO_DB_URI } from "../config/database.js";

const instanceConnection = {
  isConnected: false,
};

export const connectDB = async () => {
  try {
    if (instanceConnection.isConnected) return;
    const conn = await connect(MONGO_DB_URI);
    instanceConnection.isConnected = conn.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

connection.on("connected", () => {
  console.log("Database connected");
});
