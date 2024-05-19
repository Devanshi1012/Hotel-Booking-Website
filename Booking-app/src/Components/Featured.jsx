import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Featured() {
  const { data, loading, error } = useFetch(
    "api/hotel/countByCity?cities=mumbai,ahmedabad,delhi,goa"
  );
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const startDate = new Date();
  const endDate = new Date();
  const dates = [{ startDate, endDate }];
  const options = { adult: 1, kids: 0, room: 1 };
  const handleClick = (dest) => {
    console.log(dest);
    setDestination(dest);
    navigate("/stay", { state: { destination: dest, dates, options } });
  };

  return (
    <div>
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <h1 className="flex items-center justify-center text-2xl m-20 mb-0">
            Featured Properties
          </h1>
          <div className="flex mx-28 my-20">
            <div
              className="mx-4"
              onClick={() => {
                handleClick("Mumbai");
              }}
            >
              <div className=" text-center ">
                <img
                  src="https://cdn.sanity.io/images/ocl5w36p/production/90109c6281e038094c4adf8ca762563c62132442-5767x3358.tif?w=1600&auto=format&dpr=2"
                  className="size-80 rounded-2xl hover:opacity-50 "
                />
                <h5 className=" relative text-white -mt-12">MUMBAI</h5>
                <h5 className=" relative text-white ">{data[0]} properties</h5>
              </div>
            </div>
            <div
              className="mx-4"
              onClick={() => {
                handleClick("Ahmedabad");
              }}
            >
              <div className=" text-center">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/428035117.jpg?k=df2e741fb45f2cc770035ea1a7ac58427a3af46eb24790a004753e7f8ec2e719&o=&hp=1"
                  className="size-80 rounded-2xl hover:opacity-50"
                />
                <h5 className=" relative text-white -mt-12">AHMEDABAD</h5>
                <h5 className=" relative text-white ">{data[1]} properties</h5>
              </div>
            </div>
            <div
              className="mx-4"
              onClick={() => {
                handleClick("Delhi");
              }}
            >
              <div className=" text-center">
                <img
                  src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/01/23/0953/Hyatt-Regency-Delhi-P312-Facade.jpg/Hyatt-Regency-Delhi-P312-Facade.16x9.jpg?imwidth=2560"
                  className="size-80 rounded-2xl hover:opacity-50"
                />
                <h5 className=" relative text-white -mt-12">DELHI</h5>
                <h5 className=" relative text-white ">{data[2]} properties</h5>
              </div>
            </div>
            <div
              className="mx-4"
              onClick={() => {
                handleClick("Goa");
              }}
            >
              <div className=" text-center">
                <img
                  src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/147/282/971/Pool_(3)_O/Taj-Exotica-Resort-%26-Spa-The-Palm-Pool.jpg?tr=w-780%2Ch-437%2Cfo-auto"
                  className="size-80 rounded-2xl hover:opacity-50"
                />
                <h5 className=" relative text-white -mt-12">GOA</h5>
                <h5 className=" relative text-white ">{data[3]} properties</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
