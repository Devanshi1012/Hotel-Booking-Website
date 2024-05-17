import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookingSchema = new Schema({
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    bookings: [bookingSchema],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
