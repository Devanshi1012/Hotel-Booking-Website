import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import paymentRoute from "./routes/PaymentRouter.js";
import cors from "cors";

export const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelsRoute);
app.use("/api/user", usersRoute);
app.use("/api/room", roomsRoute);
app.use("/api", paymentRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(4002, () => {
  connect();
  console.log("connected to backend");
});
// const server = app.listen(0, () => {
//   connect();
//   const port = server.address().port;
//   console.log(`Server is running on the port ${port}`);
//   console.log("connected to backend");
// });
