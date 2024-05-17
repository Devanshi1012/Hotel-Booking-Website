// import MailList from "../../components/mailList/MailList";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";
import Reserve from "./Reserve";
// import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/api/hotel/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);
  console.log(options);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      //   console.error("Invalid date objects.");
      return null; // or handle error appropriately
    }
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);
  console.log(days)
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="mt-32 relative">
        {open && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 flex items-center">
            <FaCircleXmark
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-300 cursor-pointer"
            />
            <FaArrowLeft
              onClick={() => handleMove("l")}
              className="text-4xl text-gray-300 m-4 cursor-pointer"
            />
            <div className="flex justify-center w-full">
              <img
                src={data.photos[slideNumber]}
                alt=""
                className="w-4/5 h-4/5"
              />
            </div>
            <FaArrowRight
              onClick={() => handleMove("r")}
              className="text-4xl text-gray-300 m-4 cursor-pointer"
            />
          </div>
        )}
        <div className="w-full max-w-screen-md mx-auto">
          <button
            className="absolute top-4 right-0 border-none px-4 py-2 bg-blue-600 text-white font-bold rounded-lg cursor-pointer"
            onClick={handleClick}
          >
            Reserve or Book Now!
          </button>
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>
              <FaLocationDot />
            </span>
            <span>{data.address}</span>
          </div>
          <span className="text-blue-600">
            Excellent location – {data.distance}
          </span>
          {/* Changes */}
          <br />
          <span className="text-green-600">
            Book a stay over Rs. {data.cheapestPrice} at this property and get a
            free airport taxi
          </span>
          <div className="flex gap-2 justify-between mt-4">
            {data.photos?.map((photo, i) => (
              <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="w-full cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="text-md font-semibold mt-4">{data.desc}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-100 p-3 rounded-lg">
              <h1 className="text-lg font-bold">Perfect for a {days}-night stay!</h1>
              <span className="text-sm font-semibold">
                Located in the real heart of {data.city}, this property has an
                excellent location score of {data.locationScore} !
              </span>
              <h2 className="mt-2">
                <b>Rs. {days * data.cheapestPrice * options.room}</b> ({days}{" "}
                nights)
              </h2>
              <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg cursor-pointer"
              >
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
        {/* <MailList /> */}
      </div>
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
