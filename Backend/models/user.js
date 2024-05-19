import { Int32 } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookingSchema = new Schema({
  hotelName: {
    type: String,
    required: true,
  },
  hotelCity: {
    type: String,
    required: true,
  },
  hotelAddress: {
    type: String,
    required: true,
  },
  hotelType: {
    type: String,
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
  adults: {
    type: Number,
    required: true,
    integer: true,
  },
  kids: {
    type: Number,
    required: true,
    integer: true,
  },
  rooms: {
    type: Number,
    required: true,
    integer: true,
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
