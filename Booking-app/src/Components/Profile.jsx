import React from "react";
import useFetch from "../hooks/useFetch";
// import User from "../Backend/models/user.js";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Profile() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data } = useFetch(`/api/hotel/find/${id}`);
  console.log({ data });
  const { dates, options, city } = useContext(SearchContext);
  console.log(id);
  // console.log(dates[0].startDate);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const { user } = useContext(AuthContext);
  const username = user.details._id;
  const array = {
    hotelID: '66445c68bf8ee8001f48aedb',
    start: formatDate(dates[0]?.startDate),
    end: formatDate(dates[0]?.endDate)
  };

  const creds = { username: username, array: array };
  const res = async () => {
    await axios.post("/api/auth/bookings", creds);
  };

  res();
  // console.log(user.details);
  console.log(creds);
  return (
    <>
      <div className="flex flex-col ">
        <div className="my-20">
          <h1 className="flex font-bold text-center justify-center  text-2xl">
            YOUR BOOKINGS
          </h1>
          <div className="border border-gray-500 w-auto m-16 p-4">
            <div className="uppercase font-medium underline">{data.name}</div>
            <div className="capitalize">{data.city}</div>
            <div>{data.address}</div>
            <div className="capitalize">{data.type}</div>
            <h1>
              Dates of Stay: {formatDate(dates[0]?.startDate)} -{" "}
              {formatDate(dates[0]?.endDate)}
            </h1>
            <h2>Adults: {options.adult}</h2>
            <h2>Children: {options?.kids}</h2>
            <h2>Rooms: {options.room}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
