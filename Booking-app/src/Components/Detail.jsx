import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialDestination = location.state?.destination || "";
  const [destination, setDestination] = useState(initialDestination);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    kids: 0,
    room: 1,
  });

  const handleOptionChange = (event, optionName) => {
    event.preventDefault();
    const newValue = parseInt(event.target.value);
    setOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: newValue,
    }));
  };

  const handleClick = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
    navigate("/stay", { state: { destination, dates, options } });
  };

  const { dispatch } = useContext(SearchContext);

  return (
    <div className="flex flex-col items-center justify-center h-min-screen bg-scene bg-cover">
      <h1 className="m-32 mb-0 text-6xl font-cursive">
        Millions Of Experiences <br /> One simple Search
      </h1>
      <h1 className="font-cursive">
        Find what makes you happy anytime, anywhere
      </h1>
      <button className="bg-blue-300 p-4 mb-32 mt-32 rounded-md text-white">
        EXPLORE
      </button>
      <div className="flex gap-2 border border-gray-200 rounded-full py-2 px-4 shadow-md shadown-gray-300 w-1/2 mb-20 ">
        <div>
          <input
            type="text"
            placeholder="destination"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="border-l border-gray-400"></div>
        <div className="flex items-center gap-3 ">
          <span
            onClick={() => setOpenDate(!openDate)}
            className="bg-white w-max p-2 text-gray-400 rounded-2xl"
          >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
            dates[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="absolute z-10 mt-96"
              minDate={new Date()}
            />
          )}
        </div>
        <div className="border-l border-gray-400"></div>
        <div>
          <input
            className=" w-24 border my-1 py-2 px-3 rounded-2xl"
            type="number"
            min="1"
            placeholder="Adults"
            onChange={(e) => handleOptionChange(e, "adult")}
          />
        </div>
        <div className="border-l border-gray-400"></div>
        <div>
          <input
            className=" w-24 border my-1 py-2 px-3 rounded-2xl"
            type="number"
            min="0"
            placeholder="kids"
            onChange={(e) => handleOptionChange(e, "kids")}
          />
        </div>
        <div className="border-l border-gray-400"></div>
        <div>
          <input
            className=" w-24 border my-1 py-2 px-3 rounded-2xl"
            type="number"
            min="1"
            placeholder="room"
            onChange={(e) => handleOptionChange(e, "room")}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-full"
          onClick={handleClick}
        >
          <CiSearch />
        </button>
      </div>
    </div>
  );
}

export default Detail;
