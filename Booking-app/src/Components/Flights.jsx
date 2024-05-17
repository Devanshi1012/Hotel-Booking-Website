import React, { useState } from "react";
import flight from "../Image/planevideo.mp4";
import DatePicker from "react-datepicker";
import plane from "../Image/plane.png";
import { CiSearch } from "react-icons/ci";

function Flights() {
  const [depatureDate, setDepatureDate] = useState(null);
  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <h1 className="mt-28 mb-0 text-6xl">Ready to take of?</h1>
        <video
          src={flight}
          loop
          autoPlay
          className=" items-center h-1/6 w-1/2 m-20 rounded-full"
        />
        <img src={plane} className="absolute h-3/4 w-3/4 mt-12  items-center" />

        <div className="flex gap-2 border border-gray-200 rounded-full py-2 px-4 shadow-md shadown-gray-300 w-auto mb-20 ">
          <div>
            <input type="text" placeholder="From" />
          </div>
          <div className="border-l border-gray-400"></div>
          <div>
            <input type="text" placeholder="To" />
          </div>
          <div className="border-l border-gray-400"></div>
          <div>
            <DatePicker
              selected={depatureDate}
              onChange={(date) => setDepatureDate(date)}
              placeholderText="Departure"
              className="w-40"
            />
          </div>
          <div className="border-l border-gray-400"></div>
          <div>
            <input
              className=" w-24 border my-1 py-2 px-3 rounded-2xl"
              type="number"
              placeholder="Passengers"
            />
          </div>
          <div className="border-l border-gray-400"></div>
          <div>
            <select class=" w-24 border my-1 py-2 px-3 rounded-2xl">
              <option selected>Class</option>
              <option value="1">Economy</option>
              <option value="2">Business</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-full">
            <span>
              <CiSearch />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Flights;
