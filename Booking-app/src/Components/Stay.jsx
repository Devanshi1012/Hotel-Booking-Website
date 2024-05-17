import React, { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import useFetch from "../hooks/useFetch";
import SearchItem from "./searchItem";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

function Stay() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);


  // const { data, loading, error, reFetch } = useFetch(
  //   `/api/hotel?city=${destination}&min=${min || 0}&max=${max || 99999}`
  // );

  const lowerDestination = destination.toLowerCase()
  const { data, loading, error, reFetch } = useFetch(
    `/api/hotel?city=${lowerDestination}`
  );
  const handleClick = () => {
    reFetch();
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
  };

  const handleOptionChange = (event, optionName) => {
    event.preventDefault();
    const newValue = parseInt(event.target.value);
    setOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: newValue,
    }));
  };

  const { dispatch } = useContext(SearchContext);

  return (
    <div className="ml-5">
      <div className="flex gap-2 justify-center ">
        <div className="flex relative mt-24 gap-2 ">
          {/* <div className="flex w-1/2"> */}
            <div className="bg-blue-200 p-4  rounded-lg flex flex-col top-10 h-max">
              <h1 className="text-xl font-semibold text-gray-700 mb-4">
                Search
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-md">Destination</label>
                  <input
                    placeholder={destination}
                    type="text"
                    className="p-2 border border-gray-300 rounded"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-md">Check-in Date</label>
                  <div className="flex gap-2">
                    <div>
                      <span
                        className="bg-white w-full p-2 text-gray-500 rounded-2xl"
                        onClick={() => setOpenDate(!openDate)}
                      >{`${format(
                        dates[0].startDate,
                        "MM/dd/yyyy"
                      )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                      {openDate && (
                        <DateRange
                          onChange={(item) => setDates([item.selection])}
                          minDate={new Date()}
                          ranges={dates}
                        />
                      )}
                    </div>
                  </div>
                  {/* {openDate && (
                    <DateRange
                      onChange={(item) => setDates([item.selection])}
                      minDate={new Date()}
                      ranges={dates}
                    />
                  )} */}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Options</label>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-md mt-4 w-32">
                        Min price <small>per night</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMin(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex flex-box justify-between">
                      <span className="text-md mt-2 w-32">
                        Max price <small>per night</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMax(e.target.value)}
                        className="p-4 border border-gray-300 rounded "
                      />
                    </div>
                    <div className="flex flex-box justify-between">
                      <span className="text-md mt-4 w-32">Adult</span>
                      <input
                        type="number"
                        min={1}
                        className="p-2 border border-gray-300 rounded w-16"
                        placeholder={options.adult}
                        onChange={(e) => handleOptionChange(e, "adult")}
                      />
                    </div>
                    <div className="flex  flex-box justify-between">
                      <span className="text-md mt-4 w-32">Children</span>
                      <input
                        type="number"
                        min={0}
                        className="p-2 border border-gray-300 rounded"
                        placeholder={options.kids}
                        onChange={(e) => handleOptionChange(e, "kids")}
                      />
                    </div>
                    <div className="flex flex-box justify-between">
                      <span className="text-md mt-4 w-32">Room</span>
                      <input
                        type="number"
                        min={1}
                        className="p-2 border border-gray-300 rounded"
                        placeholder={options.room}
                        onChange={(e) => handleOptionChange(e, "room")}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleClick}
                  className="bg-blue-600 text-white font-semibold py-2 rounded cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          {/* </div> */}
          <div className="flex-3">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} dates={dates} option={options} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stay;
