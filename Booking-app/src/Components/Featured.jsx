import React from "react";
import mumbai from "../Image/mumbai.jpg";
import goa from "../Image/goa.jpg";
import raj from "../Image/rajasthan.jpg";
import hp from "../Image/Hp.jpg";
import useFetch from "../hooks/useFetch";

function Featured() {
  const { data, loading, error } = useFetch(
    "api/hotel/countByCity?cities=mumbai,himachalPradesh,rajasthan,goa"
  );
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
            <div className="mx-4 ">
              <div className=" text-center ">
                <img
                  src={mumbai}
                  className="size-80 rounded-2xl hover:opacity-50 "
                />
                <h5 className=" relative text-white -mt-12">MUMBAI</h5>
                <h5 className=" relative text-white ">{data[0]} properties</h5>
              </div>
            </div>
            <div className="mx-4">
              <div className=" text-center">
                <img
                  src={hp}
                  className="size-80 rounded-2xl hover:opacity-50"
                />
                <h5 className=" relative text-white -mt-12">
                  HIMACHAL PRADESH
                </h5>
                <h5 className=" relative text-white ">{data[1]} properties</h5>
              </div>
            </div>
            <div className="mx-4">
              <div className=" text-center">
                <img
                  src={raj}
                  className="size-80 rounded-2xl hover:opacity-50"
                />
                <h5 className=" relative text-white -mt-12">RAJASTHAN</h5>
                <h5 className=" relative text-white ">{data[2]} properties</h5>
              </div>
            </div>
            <div className="mx-4">
              <div className=" text-center">
                <img
                  src={goa}
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
