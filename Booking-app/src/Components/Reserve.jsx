import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

function Reserve({ setOpen, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const id = location.pathname.split("/")[3];

  const { data, loading, error } = useFetch(`/api/hotel/room/${id}`);
  console.log({ hotelId });
  const { dates } = useContext(SearchContext);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/api/room/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate(`/profile/${hotelId}`);
    } catch (error) {}
  };


  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);


  console.log({data})
  return (
    <>
      <div className="w-full h-full fixed flex items-center justify-center bg-black bg-opacity-40 left-0 top-0">
        <div className="relative bg-white p-5">
          <FaCircleXmark
            className="absolute cursor-pointer right-0 top-0"
            onClick={() => setOpen(false)}
          />
          <span>Select Your Rooms</span>
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center gap-12 p-5"
            >
              <div className="flex flex-col gap-1">
                <div className="font-medium">{item.title}</div>
                <div className="font-light">{item.desc}</div>
                <div className="text-xs">Max People: {item.maxPeople}</div>
                <div className="font-medium">{item.price}</div>
              </div>
              <div className="flex flex-wrap gap-1 text-xs text-gray-600">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="flex flex-col">
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            className="px-2 py-5 bg-blue-400 text-white rounded-md w-full mt-5 font-medium"
            onClick={handleClick}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Reserve;
