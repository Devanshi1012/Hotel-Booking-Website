import { Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import Hotel from "./Hotel";
import { useContext } from "react";

const SearchItem = ({ item, dates, option }) => {
  // console.log({item});
  // console.log({days})
  console.log({ dates });
  // console.log({ option });
  // const { dates } = useContext(SearchContext);
  // const { option } = useContext(SearchContext);

  return (
    <div className="border border-gray-300 rounded-md p-4 flex justify-between items-center space-x-4 mb-4">
      <img src={item.photos[0]} alt="" className="w-48 h-48 object-cover" />
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="text-xl text-blue-500">{item.name}</h1>
        <span className="text-sm font-semibold">{item.distance}</span>
        {/* <span className="text-sm">{item.distance} from center</span> */}
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
          Free airport taxi
        </span>
        <span className="text-xs font-bold">
          Studio {item.type} with Air conditioning
        </span>
        <span className="text-xs font-semibold">{item.desc}</span>
        {item.cancel && (
          <div>
            <span className="text-xs font-bold text-green-600">
              Free cancellation
            </span>
            <br />
            <span className="text-xs text-green-600">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-end justify-between">
        {item.rating && (
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Rating : </span>
            <button className="ml-2 bg-blue-700 text-white rounded-md px-2 font-bold">
              {item.rating}
            </button>
          </div>
        )}
        <div className="text-right flex flex-col gap-1">
          <span className="text-2xl font-semibold">
            Rs {item.cheapestPrice} /-
          </span>
          <span className="text-sm text-gray-500">Includes taxes and fees</span>
            <Link to={`/api/hotel/${item._id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-md">
                See availability
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
