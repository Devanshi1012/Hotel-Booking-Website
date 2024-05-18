import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const register = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (existingUser) {
      return next(createError(400, "Username or email already exists"));
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "user not found"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "wrong password or user"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};

// export const bookings = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ _id: req.body.username });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if the booking already exists
//     const bookingExists = user.bookings.some(
//       (booking) => booking.hotelID === req.body.array.hotelID
//     );

//     if (bookingExists) {
//       return res.status(400).json({ message: "Booking already exists" });
//     }
//     const result = await User.findOneAndUpdate(
//       { _id: req.body.username },
//       { $push: { bookings: req.body.array } }
//     );
//     res.status(200).json({ message: "Booking added successfully", result });
//     console.log("Updated", result);

//     // console.log(user.bookings);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

export const bookings = async (req, res, next) => {
  try {
    // Find the user document
    const user = await User.findOne({ _id: req.body.username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User bookings:", user.bookings); // Log existing bookings
    console.log("New booking:", req.body.array); // Log new booking details

    // Ensure the new booking dates are in ISO format
    const newStart = new Date(req.body.array.start).toISOString();
    const newEnd = new Date(req.body.array.end).toISOString();

    // Convert hotelID to ObjectId if necessary
    const newHotelID = new mongoose.Types.ObjectId(req.body.array.hotelID);

    // Check if the booking already exists
    const bookingExists = user.bookings.some((booking) => {
      const existingStart = new Date(booking.start).toISOString();
      const existingEnd = new Date(booking.end).toISOString();

      console.log("Comparing:", {
        hotelID: booking.hotelID.toString(),
        existingStart,
        existingEnd,
        newStart,
        newEnd,
      });

      return (
        booking.hotelID.equals(newHotelID) &&
        existingStart === newStart &&
        existingEnd === newEnd
      );
    });

    if (bookingExists) {
      return res.status(400).json({ message: "Booking already exists" });
    }

    // Push the new booking
    user.bookings.push({
      hotelID: newHotelID,
      start: new Date(req.body.array.start),
      end: new Date(req.body.array.end),
    });
    const result = await user.save();

    res.status(200).json({ message: "Booking added successfully", result });
  } catch (error) {
    console.error("Error adding booking:", error);
    next(error);
  }
};
