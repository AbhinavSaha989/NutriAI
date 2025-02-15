import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true 
})); 

const PORT = process.env.PORT || 5000;  

app.use(express.json({ limit: "5mb" }));

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})
