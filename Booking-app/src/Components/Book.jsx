import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useState } from "react";
import { SearchContext } from "../context/SearchContext";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Book = () => {
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [bookings, setBookings] = useState([]);
  const { data } = useFetch(`/api/hotel/find/${id}`);
  const { dates, options, city } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const username = user.details._id;
  const array = {
    hotelName: data.name,
    hotelCity: data.city,
    hotelAddress: data.address,
    hotelType: data.type,
    start: formatDate(dates[0]?.startDate),
    end: formatDate(dates[0]?.endDate),
    adults: options.adult,
    kids: options.kids,
    rooms: options.room,
  };

  const creds = { username: username, array: array };
  const handleClick = async () => {
    try {
      await axios.post("/api/auth/bookings", creds);
      console.log("Updated");
      navigate(`/profile`);
    } catch (error) {
      console.log(error);
    }
    console.log({ username });
    console.log({ array });
  };

  return (
    <div>
      <button
        className="px-2 py-5 bg-blue-400 text-white rounded-md w-full mt-5 font-medium"
        onClick={handleClick}
      >
        Book
      </button>
    </div>
  );
};

export default Book;
