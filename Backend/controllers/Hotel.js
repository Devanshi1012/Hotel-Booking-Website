// import { Promise } from "mongoose";
import hotel from "../models/hotel.js";
import Room from "../models/room.js";
export const createHotel = async (req, res, next) => {
  const newHotel = new hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

//update
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = new hotel.findByIdAndDelete(req.param.id);
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    next(error);
  }
};
//get
export const getHotel = async (req, res, next) => {
  try {
    const Hotel = await hotel.findById(req.params.id);
    res.status(200).json(Hotel);
    console.log(Hotel)
  } catch (error) {
    next(error);
  }
};
//get all
export const getHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const Hotels = await hotel
      .find({
        ...others,
        cheapestPrice: { $gt: min || 1, $lt: max || 19000 },
      })
      .limit(parseInt(req.query.limit));
    res.status(200).json(Hotels);
    console.log(Hotels)
  } catch (error) {
    next(error);
  }
};
//countByCity
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await hotel.countDocuments({ type: "apartment" });
    const resortCount = await hotel.countDocuments({ type: "resort" });
    const villaCount = await hotel.countDocuments({ type: "villa" });
    const cabinCount = await hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};
export const getHotelRooms = async (req, res, next) => {
  try {
    const Hotel = await hotel.findById(req.params.id);
    console.log("Yaha")
    const list = await Promise.all(
      Hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    console.log("Fir yaha")
    res.status(200).json(list);
  } catch (error) {
    console.log("AAb yaaha")
    console.log(error)
    next(error);
  }
};
