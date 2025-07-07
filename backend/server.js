import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.connect.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse json body - request body
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
