import React from "react";
import useFetch from "../hooks/useFetch";
// import User from "../Backend/models/user.js";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {
  const [bookings, setBookings] = useState([]);
  const location = useLocation();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const { user } = useContext(AuthContext);
  const username = user.details._id;

  // Delete Code
  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`/api/auth/deletebookings/${username}/${bookingId}`);
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.post("/api/auth/getbookings", {
          username,
        });
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [username]);

  return (
    <>
      <div className="flex flex-col ">
        <div className="my-20">
          <h1 className="flex font-bold text-center justify-center  text-2xl">
            YOUR BOOKINGS
          </h1>
          {bookings.length === 0 ? (
            <h1 className="flex items-center justify-center -ml-3 mt-3">
              No Bookings Found
            </h1>
          ) : (
            <div>
              {bookings.map((item, index) => (
                <div key={index}>
                  <div className="border border-gray-500 w-auto m-16 p-4">
                    <div className="flex justify-between">
                      <div className="uppercase font-medium underline">
                        {item.hotelName}
                      </div>
                      <button
                        className="bg-red-300 hover:bg-red-400 px-2 py-1 rounded-md font-semibold border border-black"
                        onClick={() => handleDelete(item._id)}
                      >
                        Cancel
                      </button>
                      {/* <p>{item._id}</p> */}
                    </div>
                    <div className="capitalize">{item.hotelCity}</div>
                    <div>{item.hotelAddress}</div>
                    <div className="capitalize">{item.hotelType}</div>
                    <h1>
                      Dates of Stay: {formatDate(item.start)} -{" "}
                      {formatDate(item.end)}
                    </h1>
                    <h2>Adults: {item.adults}</h2>
                    <h2>Children: {item?.kids}</h2>
                    <h2>Rooms: {item.rooms}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
